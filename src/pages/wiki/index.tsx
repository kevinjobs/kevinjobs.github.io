import React from 'react';
import { PullDown } from '@/components';
import PostPanel from '../_partial/post-panel';
import { PostApi, IPost } from '@/apis';

export interface WikiPageProps {};

const WikiPage: React.FC<WikiPageProps> = props => {
  const [posts, setPosts] = React.useState<IPost[]>();
  const [post, setPost] = React.useState<IPost>();

  const data = [{
    title: '一般',
    key: '1',
    open: true,
    children: [
      {
        title: '文章',
        key: '1-1'
      },
      {
        title: '热点',
        key: '1-2'
      },
      {
        title: '其他',
        key: '1-3'
      }
    ]
  }]

  const getPostListByCate = (cate: string) => {
    PostApi.getPostList(1, 10, cate).then(res => {
      if (res.data.code === 1) {
        setPosts(res.data.data.items);
        console.log(res.data.data);
      }
    })
  }

  const handleSelect = (e: any) => {
    const title = e.target.dataset.title;
    switch (title) {
      case '文章':
        getPostListByCate('article');
        break;
      case '图片':
        getPostListByCate('picture');
        break;
    }
  }

  const handleSelectPost = (e: any) => {
    const id = e.target.dataset.id;
    PostApi.getPostById(id).then(res => {
      if (res.data.code === 1) {
        setPost(res.data.data);
      }
    })
  }

  React.useEffect(() => {
    getPostListByCate('article');
  }, [])

  return (
    <div className="wiki-page">
      <div className="header"></div>
      <div className="container">
        <div className="left-panel">
          <div className="header">
            <h3>页面导航</h3>
          </div>
          <div className="menus">
            <PullDown data={data} style={{fontSize: 16}}
              onSelect={handleSelect} />
          </div>
        </div>
        <div className="content">
          { post && <PostPanel post={post} /> }
        </div>
      </div>
    </div>
  )
}

export default WikiPage;