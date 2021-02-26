import React from 'react';
import classNames from 'classnames';

import { getPostList } from '@/apis/post';
import { ArticleInterface, HomePageProps } from '@/pages';
import ArticleList from './home-list';
import { Divider, Button } from '@/components';


const Homepage: React.FC<HomePageProps> = (props) => {
  const [articleList, setArticleList] = React.useState<ArticleInterface[]>();
  const [currentPage, setCurrentPage] = React.useState(2);
  const [pageSize, setPageSize] = React.useState(6);
  const [selectedPost, setSelectedPost] = React.useState<ArticleInterface>();
  const [isMorePost, setIsMorePost] = React.useState(true);

  const loadMore = (e: any) => {
    if (isMorePost) {
      getPostList(currentPage, pageSize)
      .then(res => {
        if (res.status === 200) {
          const { items, total } = res.data.data;
          setArticleList(articleList?.concat(items));
          setCurrentPage(currentPage + 1);
          if (currentPage * pageSize >= total) {
            setIsMorePost(false);
          }
        }
      })
      .catch(err => console.log(err));
    }
  }

  const handleScroll = (e: any) => {if (selectedPost) e.preventDefault();}

  React.useEffect(() => {
    getPostList(1, 6)
      .then(res => setArticleList(res.data.data.items))
      .catch(err => console.error(err));
    document.body.addEventListener('touchmove', handleScroll, {passive:false});
    document.body.addEventListener('wheel', handleScroll, {passive:false});
    return () => {
      document.body.removeEventListener('touchmove', handleScroll);
      document.body.removeEventListener('wheel', handleScroll);
    }
  }, [selectedPost])
  
  const classnames = classNames({
    "Article": true,
    "Mobile": props.type === 1,
    "Desktop": props.type === 2
  });

  return (
    <div className={classnames}>
      <div className="ArticleList">
        {
          articleList
            ? <ArticleList articleList={articleList} />
            : <div className="mint-loader"></div>
        }
      </div>
      <div className="Article__LoadMore">
        <Divider>
          {
            isMorePost
              ? <Button onClick={loadMore}>加载更多</Button>
              : <small>我是有底线的</small>
          }
        </Divider>
      </div>
    </div>
  )
}

export default Homepage;