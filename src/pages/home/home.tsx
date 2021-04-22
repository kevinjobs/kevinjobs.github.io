import React from 'react';
import classNames from 'classnames';

import { PostApi, IPost } from '@/apis';
import { HomePageProps } from '@/pages';
import ArticleList from './home-list';
import { Button, message, Carousel } from '@/components';

const Homepage: React.FC<HomePageProps> = (props) => {
  const [articleList, setArticleList] = React.useState<IPost[]>();
  const [photos, setPhotos] = React.useState<IPost[]>();
  const [currentPage, setCurrentPage] = React.useState(1);
  const [isMorePost, setIsMorePost] = React.useState(true);

  const loadMore = (e: any) => {
    if (isMorePost) {
      PostApi.getPostList(currentPage + 1, 9, 'article')
      .then(res => {
        if (res.data.code === 1) {
          const { items, current_page } = res.data.data;
          setArticleList(articleList?.concat(items));
          setCurrentPage(current_page);
        } else {
          message({text: '没有更多了', type: 'danger'});
          setIsMorePost(false);
        }
      })
      .catch(err => console.log(err));
    }
  }

  React.useEffect(() => {
    PostApi.getPostList(1, 8, 'article')
      .then(res => setArticleList(res.data.data.items))
      .catch(err => console.error(err));
    PostApi.getPostList(1, 5, 'picture')
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
            onClick={(e: any) => console.log(e.target.dataset['index'])}
            style={{width: 700, height: 400, borderRadius: 8}}
          />
        }
      </div>
      <div className="article-list">
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
    </div>
  )
}

export default Homepage;