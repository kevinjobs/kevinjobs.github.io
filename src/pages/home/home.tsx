import React from 'react';
import classNames from 'classnames';

import { PostApi, IPost } from '@/apis';
import { HomePageProps } from '@/pages';
import ArticleList from './home-list';
import { Button, message, Carousel, Modal } from '@/components';
import { IMG_BASE_URL } from '@/config';

const Homepage: React.FC<HomePageProps> = (props) => {
  const [articleList, setArticleList] = React.useState<IPost[]>();
  const [photos, setPhotos] = React.useState<IPost[]>();
  const [currentPage, setCurrentPage] = React.useState(1);
  const [isMorePost, setIsMorePost] = React.useState(true);
  const [ showPhoto, setShowPhoto ] = React.useState<string>();

  const articlePageSize = 8;
  const picturePageSize = 5;

  const handleClick = (e: any, item: any) => {
    console.log(item);
    setShowPhoto(IMG_BASE_URL + item.cover);
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
  }

  React.useEffect(() => {
    PostApi.getPostList(1, articlePageSize, 'article')
      .then(res => setArticleList(res.data.data.items))
      .catch(err => console.error(err));
    PostApi.getPostList(1, picturePageSize, 'picture')
      .then(res => setPhotos(res.data.data.items))
      .catch(err => console.error(err));
  }, [])

  const classnames = classNames({
    "Article": true,
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
            onClick={handleClick}
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
      <Modal
        onClose={e => setShowPhoto(undefined)}
        visible={showPhoto ? true : false}
      >
        <img style={{width: 600}} src={showPhoto} />
      </Modal>
    </div>
  )
}

export default Homepage;