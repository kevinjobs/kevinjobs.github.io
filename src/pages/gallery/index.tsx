import * as React from 'react';
import classNames from 'classnames';
import { Masonry, ImagePreview } from '@/components';
import { PostApi } from '@/apis';
import { ImageInterface } from '@/types';
import { useViewport, breakpoint } from '@/hooks';

export interface GalleryPageProps {};

const GalleryPage: React.FC<GalleryPageProps> = () => {
  const [currentPage, setCurrentPage] = React.useState(2);
  const [imageList, setImageList] = React.useState<ImageInterface[]>([]);
  const [selectedImgIndex, setSelectedImgIndex] = React.useState<number>();
  const [isMore, setIsMore] = React.useState(true);

  const { width } = useViewport();
  const baseUrl = 'https://mintforge-1252473272.cos.ap-nanjing.myqcloud.com/image/';

  const loadmore = () => {
    PostApi.getPostList(currentPage, 12, 'picture').then(res => {
      if (res.status === 200 && res.data.code === 1) {
        const { current_page, page_size, total } = res.data.data;
        if ((current_page - 1) * page_size <= total) {
          setImageList(imageList.concat(res.data.data.items));
          setCurrentPage(currentPage + 1);
        } else {
          setIsMore(false);
        }
      }
    }).catch(err => console.log(err));
  }

  // 选定图片用于展现大图
  const handleSelect = (e: any, item: any, index: number) => {
    setSelectedImgIndex(index);
  }

  React.useEffect(() => {
    PostApi.getPostList(1, 8, 'picture').then(res => {
      if (res.data.code === 1) {
        setImageList(res.data.data.items)
      }
    }).catch(err => console.log(err));
  }, [])

  const mobileWidth = (width - 15) / 2;

  const masonryProps: any = {
    columns: width < breakpoint ? 2 : 3,
    columnWidth: width < breakpoint ? mobileWidth : 320,
    gutter: width < breakpoint ? 5 : 10
  }

  const convertData = (items: any[]) => {
    const newItems = [];
    for (let item of items) {
      const newItem = { source: '', title: ''};
      newItem['source'] = baseUrl + item['cover'];
      newItem['title'] = item['title'];
      newItems.push(newItem);
    };
    return newItems;
  };

  const classname = classNames(
    'Gallery',
    {
      'Mobile': width < breakpoint
    }
  )

  return (
    <div className={classname}>
      <div className="Gallery-Container">
        <div className="masonry">
          {
            imageList.length !== 0
              ? <Masonry items={imageList} onSelect={handleSelect} {...masonryProps} />
              : <div className="mint-loader"></div>
          }
        </div>
        <div className="loadmore-button" onClick={loadmore}>
          { isMore ? '加载更多图片' : '我是有底线的' }
        </div>
      </div>
      {
        selectedImgIndex !== undefined &&
        <ImagePreview
          data={convertData(imageList)}
          defaultIndex={selectedImgIndex}
          onClose={(e: any) => setSelectedImgIndex(undefined)}
        />
      }
    </div>
  )
}

export default GalleryPage;