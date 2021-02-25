import React from 'react';
import { Masonry } from '@/components';
import { getPostList } from '@/apis/post';
import { ImageInterface } from '@/types';
import { useViewport, breakpoint } from '@/hooks/viewportCtx';

export interface GalleryPageProps {};

const GalleryPage: React.FC<GalleryPageProps> = () => {
  const [currentPage, setCurrentPage] = React.useState(2);
  const [imageList, setImageList] = React.useState<ImageInterface[]>([]);
  const { width } = useViewport();

  const loadmore = (currentPage: number) => {
    getPostList(currentPage, 8, 1).then(res => {
      if (res.data.data.items.length === 0) {
        // message.info('没有更多图片',1)
      } else {
        setImageList(imageList.concat(res.data.data.items));
        setCurrentPage(currentPage + 1);
      }
    });
  }

  const scroll = (e: any) => {
    const top = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight || document.body.scrollHeight;
    const cHeight = document.documentElement.clientHeight || document.body.clientHeight;
    const threshold = 100;
    const diff = height - top - cHeight
    if (diff <= threshold) {
      loadmore(currentPage);
    };
  }

  const debounce = (fn: Function, wait: number) => {
    let timer: number | null = null;
    return function() {
      if (timer !== null) {
        clearTimeout(timer);
      }
      timer = setTimeout(fn, wait);
    }
  }

  React.useEffect(() => {
    getPostList(1, 8, 1).then(res => {
      if (res.status === 200 && res.data.code === 1) {
        setImageList(res.data.data.items)
      }
    }).catch(err => console.log(err));

    document.body.addEventListener('wheel', debounce(scroll, 500), {passive: false});
    return () => {
      document.body.addEventListener('wheel', debounce(scroll, 500));
    }
  }, [])

  const mobileWidth = (width - 15) / 2;

  const masonryProps: any = {
    columns: width < breakpoint ? 2 : 4,
    columnWidth: width < breakpoint ? mobileWidth : 300,
    gutter: width < breakpoint ? 5 : 10
  }

  return (
    <div className="Gallery">
      <div className="Gallery-Container">
        <Masonry items={imageList} {...masonryProps} />
        <div className="loader"></div>
      </div>
    </div>
  )
}

export default GalleryPage;