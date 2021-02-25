import React from 'react';
import _ from 'lodash';
import { Masonry } from '@/components';
import { getPostList } from '@/apis/post';
import { ImageInterface } from '@/types';
import { useViewport, breakpoint } from '@/hooks/viewportCtx';

export interface GalleryPageProps {};

const GalleryPage: React.FC<GalleryPageProps> = () => {
  const [currentPage, setCurrentPage] = React.useState(2);
  const [imageList, setImageList] = React.useState<ImageInterface[]>([]);
  const [isMore, setIsMore] = React.useState(true);

  const { width } = useViewport();

  const loadmore = () => {
    getPostList(currentPage, 12, 1).then(res => {
      if (res.status === 200 && res.data.code === 1) {
        const { current_page, page_size, total } = res.data.data;
        if (current_page * page_size <= total) {
          setImageList(imageList.concat(res.data.data.items));
          setCurrentPage(currentPage + 1);
        } else {
          setIsMore(false);
        }
      }
    }).catch(err => console.log(err));
  }

  React.useEffect(() => {
    getPostList(1, 12, 1).then(res => {
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

  return (
    <div className="Gallery">
      <div className="Gallery-Container">
        <Masonry items={imageList} {...masonryProps} />
        <div className="loadmore-button" onClick={loadmore}>
          { isMore ? '加载更多图片' : '我是有底线的' }
        </div>
      </div>
    </div>
  )
}

export default GalleryPage;