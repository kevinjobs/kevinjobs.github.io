import React from 'react';
import { getPostList, deleteById } from '@/apis/post';
import { Button, Pagination, Icon } from '@/components';
import { ArticleInterface } from '@/types';
import PostGlance from '../_partial/post-glance';

const AdminArticle: React.FC = () => {
  const [postListPage, setPostListPage] = React.useState<number>(1);
  const [postList, setPostList] = React.useState<ArticleInterface []>();
  const [total, setTotal] = React.useState(0);
  const [fresh, setFresh] = React.useState<number>(0);
  const [postType, setPostType] = React.useState(0);

  React.useEffect(() => {
    getPostList(postListPage, 5, postType)
      .then(res => {
        if (res.status === 200) {
          setPostList(res.data.data.items);
          setTotal(res.data.data.total);
        }
      }).catch(err => console.log(err));
  }, [postListPage, fresh]);

  const handlePrev = (e: any) => {
    if (postListPage > 1) {
      setPostListPage(postListPage - 1);
    } else {
      setPostListPage(1);
      alert('First Page');
    }
  }

  const handleNext = (e: any) => {
    if (postListPage * 5 < total) {
      setPostListPage(postListPage + 1);
    } else {
      setPostListPage(1);
      alert('Last Page');
    }
  }
  
  const handleDelete = (e: any, id: string) => {
    const r = window.confirm('确定删除这篇文章？');
    if (r) {
      deleteById(id).then(res => {
        if (res.status === 200 && res.data.code === 1) {
          window.alert('Deleted');
          setFresh(Math.random());
        }
      }).catch(err => alert(err));
    }
  }

  const renderPostItem = (post: any, index: number) => {
    return (
      <div key={index} className="item">
        <PostGlance post={post} onDelete={handleDelete} />
      </div>
    )
  }

  return (
    <div className="Admin-Article-Overview">
      <div className="Admin-Article__Container">
        <div className="header">
          <div className="post-type">
            <div className="title">
              { postType === 0 ? '文章列表' : '图片列表' }
              <Icon icon="angle-down" theme="dark" style={{margin:'0 10px'}} />
            </div>
            <div className="more">
              <p onClick={(e: any) => {
                if (postType === 0) setPostType(1);
                if (postType === 1) setPostType(0);
                setFresh(Math.random());
                setPostListPage(1);
              }}>
                { postType === 0 ? '图片列表' : '文章列表' }
              </p>
            </div>
          </div>
          <Button>新增</Button>
        </div>
        <div className="post-list">
          <div className="items">
            { postList ? postList.map(renderPostItem) : <div className="mint-loader"></div> }
          </div>
          <div className="prev-next">
            <Pagination onPrev={handlePrev} onNext={handleNext} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminArticle;