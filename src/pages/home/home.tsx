import React from 'react';
import classNames from 'classnames';

import { PostApi, IPost } from '@/apis';
import { HomePageProps } from '@/pages';
import ArticleList from './list';
import { Button, message, Carousel, ImagePreview } from '@/components';
import { CLOUD } from "@/config";

const Homepage: React.FC<HomePageProps> = (props) => {
  // 文章
  const [articleList, setArticleList] = React.useState<IPost[]>(); // 文章列表
  const [currentPage, setCurrentPage] = React.useState(1); // 文章当前页面
  const [isMorePost, setIsMorePost] = React.useState(true); // 是否有更多文章
  // 轮播图
  const [photos, setPhotos] = React.useState<IPost[]>();
  const [selectedPhotoIndex, setSelectedPhotoIndex] = React.useState<number>();

  const articlePageSize = 8;
  const picturePageSize = 8;

  // 处理走马灯组件点击图片时的动作
  const handleSelect = (e: any, item: any, index: number) => {
    console.log(index);
    setSelectedPhotoIndex(index);
  }

  const loadMore = (e: any) => {
    if (isMorePost) {
      PostApi.getPostList(currentPage + 1, articlePageSize, 'article')
      .then(res => {
        if (res.data.code === 1) {
          const { items, current_page } = res.data.data;
          setArticleList(articleList?.concat(items));
          setCurrentPage(current_page);
          if (items.length < articlePageSize) {
            message({text: '最后一页啦', type: 'danger'});
            setIsMorePost(false);
          }
        }
      })
      .catch(err => console.log(err));
    }
  };

  // 将 IPost 转化为 ImagePreview 需要的对象格式
  const convertPostToData = (items: IPost[]) => {
    const newItems = [];
    for (let item of items) {
      const newItem = { source: '', title: '' };
      newItem['title'] = item['title'];
      newItem['source'] = CLOUD.tcy.baseUrl + item['cover'] || '';
      newItems.push(newItem);
    };
    return newItems;
  };

  // 组件挂载时，请求图片和文章
  React.useEffect(() => {
    PostApi.getPostList(1, articlePageSize, 'article')
      .then(res => setArticleList(res.data.data.items))
      .catch(err => console.error(err));
    PostApi.getPostList(1, picturePageSize, 'picture')
      .then(res => setPhotos(res.data.data.items))
      .catch(err => console.error(err));
  }, []);

  const classnames = classNames({
    "home-container": true,
    [`${props.type}`]: props.type
  });

  return (
    <div className={classnames}>
      <div className="home-carousel">
        {
          photos
          &&
          <Carousel
            items={photos}
            onClick={handleSelect}
          />
        }
      </div>
      <div className="article-list">
        <h2 className="header" style={{width: '100%'}}>最 近 文 章</h2>
        {
          articleList
            ? <ArticleList articleList={articleList} />
            : <div className="mint-loader"></div>
        }
      </div>
      <div className="loadmore">
          {
            isMorePost
              ? <Button onClick={loadMore}>加载更多</Button>
              : <small>我是有底线的</small>
          }
      </div>
      {
        // 此处要注意 selectedPhotoIndex 为 0 时会被布尔化为 false
        selectedPhotoIndex !== undefined && photos &&
        <ImagePreview
          defaultIndex={selectedPhotoIndex}
          data={convertPostToData(photos)}
          onClose={(e: any) => setSelectedPhotoIndex(undefined)}
        />
      }
    </div>
  )
}

export default Homepage;