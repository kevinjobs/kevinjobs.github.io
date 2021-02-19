import './style.scss';
import React from 'react';
import classNames from 'classnames';
// utils
import { getPostList, getPostById } from '@/apis/post';
// interface
import { ArticleInterface } from './homepage.interface'; 
// partial
import ArticleList from './ArticleList';
import ArticleFloatCard from './ArticleFloatCard';

interface ArticleProps {
  type: number; // 1: mobile; 2: desktop: 3: pad; 4: ...
}

const Article: React.FC<ArticleProps> = (props: ArticleProps) => {
  const [articleList, setArticleList] = React.useState<ArticleInterface[]>();
  const [currentPage, setCurrentPage] = React.useState(2);
  const [pageSize, setPageSize] = React.useState(6);
  const [selectedPost, setSelectedPost] = React.useState<ArticleInterface>();
  const [isMorePost, setIsMorePost] = React.useState(true);

  const openArticleFloatCard = (e: any) => {
    const id = e.target.attributes.getNamedItem('data-id').value;
    console.log(id);
    getPostById(id)
      .then(res => setSelectedPost(res.data.data))
      .catch(err => console.log(err));
  }
  
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
    "Mobile": props.type === 1 ? true : false,
    "Desktop": props.type === 2 ? true : false
  });

  return (
    <div className={classnames}>
      <ArticleList articleList={articleList!} onOpen={openArticleFloatCard}/>
      {
        selectedPost
        ?
        <ArticleFloatCard
          article={selectedPost}
          onClose={(e: any) => setSelectedPost(undefined)}
        />
        :
        null
      }
      <div className="Article__LoadMore">
        <span className="Article__LoadMore--front"></span>
        <span className="Article__LoadMore--center">
          <button onClick={loadMore}>{isMorePost ? '加载更多' : '没有更多了'}</button>
        </span>
        <span className="Article__LoadMore--back"></span>
      </div>
    </div>
  )
}

export default Article;