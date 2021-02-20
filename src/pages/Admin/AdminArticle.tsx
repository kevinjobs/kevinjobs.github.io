import React from 'react';
import { getPostList } from '@/apis/post';
import Button from '@/components/Button';

const AdminArticle: React.FC = () => {
  const [postList, setPostList] = React.useState<any []>();

  React.useEffect(() => {
    getPostList(1,8)
      .then(res => {
        if (res.status === 200) {
          setPostList(res.data.data.items);
        }
      }).catch(err => console.log(err));
  }, [])

  const latestPost = (post: any) => {
    return (
      <div className="Admin-Article__Left--Newlist__latest">
        <div className="cover">
          <img src={post.cover} alt={post.title} />
        </div>
        <div className="info">
          <h3 className="item title">{post.title}</h3>
          <div className="item author">作者: {post.author}</div>
          <div className="item id">文章ID: {post.id}</div>
          <div className="item tags">{post.tags}</div>
        </div>
      </div>
    )
  }

  const showPostList = (post: any, index: number) => {
    return (
      <div key={index} className="item">
        <div className="left">
          <h4>{ post.title }</h4>
          <span>{ post.author }</span>
          <span>{ post.create_at }</span>
        </div>
        <div className="right">
          <Button onClick={(e: any) => console.log('edit')}>Edit</Button>
          <Button type="primary">View</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="Admin-Article">
      <div className="Admin-Article__Left">
        <div className="Admin-Article__Left--Newlist">
          { postList ? latestPost(postList[0]) : null }
        </div>
      </div>
      <div className="Admin-Article__Right">
        <div className="Admin-Article__Right--PostList">
          { postList?.map(showPostList) }
        </div>
      </div>
    </div>
  )
}

export default AdminArticle;