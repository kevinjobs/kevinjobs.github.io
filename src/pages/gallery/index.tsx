import React from 'react';
import classNames from 'classnames';
import { Masonry, Icon } from '@/components';
import { getPostById, getPostList } from '@/apis/post';
import { ImageInterface } from '@/types';
import { useViewport, breakpoint } from '@/hooks/viewportCtx';

export interface GalleryPageProps {};

const GalleryPage: React.FC<GalleryPageProps> = () => {
  const [currentPage, setCurrentPage] = React.useState(2);
  const [imageList, setImageList] = React.useState<ImageInterface[]>([]);
  const [selectedImg, setSelectedImg] = React.useState<ImageInterface>();
  const [isMore, setIsMore] = React.useState(true);

  const { width } = useViewport();
  const baseUrl = 'https://mintforge-1252473272.cos.ap-nanjing.myqcloud.com/image/';

  const loadmore = () => {
    getPostList(currentPage, 12, 'picture').then(res => {
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

  const handleOpen = (e: any) => {
    const picid = e.target.dataset.picid;
    getPostById(picid).then(res => {
      if (res.status === 200 && res.data.code === 1) {
        setSelectedImg(res.data.data);
      }
    });
  }

  React.useEffect(() => {
    getPostList(1, 12, 'picture').then(res => {
      if (res.status === 200 && res.data.code === 1) {
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

  const renderPreview = (image: ImageInterface) => {
    const { address, author, datetime, exposure_time, iso } = JSON.parse(String(image.exif));
    const { cover = '' } = image;

    return (
      <div className="Gallery-Preview" onClick={e => setSelectedImg(undefined)}>
        <img
          src={baseUrl + cover.replace('JPG', 'jpg')}
          alt={image.title}
        />
        <div className="info">
          <div>{ image.desc || '这张图片暂时没有描述' }</div>
          <div><Icon icon="user" theme="light" />{ author }</div>
          <div><Icon icon="calendar" theme="light" />{ datetime.slice(0,10) }</div>
          <div><Icon icon="clock" theme="light" />{ exposure_time }</div>
          <div><Icon icon="adjust" theme="light" />{ iso }</div>
          <div><Icon icon="location-arrow" theme="light" />{ address.split('|')[1] || '未知地点' }</div>
          <div><Icon icon="compass" theme="light" />{ address.split('|')[0] }</div>
        </div>
      </div>
    )
  }

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
              ? <Masonry items={imageList} openImage={handleOpen} {...masonryProps} />
              : <div className="mint-loader"></div>
          }
        </div>
        <div className="loadmore-button" onClick={loadmore}>
          { isMore ? '加载更多图片' : '我是有底线的' }
        </div>
      </div>
      { selectedImg && renderPreview(selectedImg) }
    </div>
  )
}

export default GalleryPage;