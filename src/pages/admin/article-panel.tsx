import React from 'react';
import { getPostById, getPostList, patchById, deleteById, postNew } from '@/apis/post';
import { Button, Pagination } from '@/components';
import ArticleEditor from './editor';
import { ArticleInterface } from '@/pages';
import dayjs from 'dayjs';

const AdminArticle: React.FC = () => {
  const [latestPost, setLatestPost] = React.useState<ArticleInterface>();
  const [postListPage, setPostListPage] = React.useState<number>(1);
  const [postList, setPostList] = React.useState<ArticleInterface []>();
  const [total, setTotal] = React.useState(0);
  const [selectedPostId, setSelectedPostId] = React.useState<string>();
  const [selectedPost, setSelectedPost] = React.useState<ArticleInterface>();
  const [viewPost, setViewPost] = React.useState<ArticleInterface>();
  const [viewPostId, setViewPostId] = React.useState<string>();
  const [fresh, setFresh] = React.useState<number>();

  React.useEffect(() => {
    if (selectedPostId) {
      getPostById(selectedPostId)
        .then(res => {
          if (res.status === 200 && res.data.code === 1) {
            setSelectedPost(res.data.data);
          }
        }).catch(err => console.log(err));
    }
  }, [selectedPostId])

  React.useEffect(() => {
    getPostList(postListPage,9)
      .then(res => {
        if (res.status === 200) {
          setPostList(res.data.data.items);
          setTotal(res.data.data.total);
        }
      }).catch(err => console.log(err));
  }, [postListPage, fresh]);

  React.useEffect(() => {
    getPostList(postListPage,9)
      .then(res => {
        if (res.status === 200) {
          setLatestPost(res.data.data.items[0]);
        }
      }).catch(err => console.log(err));
  }, []);

  React.useEffect(() => {
    if (viewPostId) {
      getPostById(viewPostId)
        .then(res => {
          if (res.status === 200 && res.data.code === 1) {
            setViewPost(res.data.data);
          }
        }).catch(err => console.log(err));
    }
  }, [viewPostId])

  const handleSubmitForm = (e: any) => {
    const articleForm = JSON.parse(e.target.dataset.form);
    const submitForm = JSON.parse(JSON.stringify(articleForm));
    delete submitForm['id'];
    delete submitForm['create_at'];
    delete submitForm['update_at'];
    delete submitForm['exif'];

    if (articleForm && articleForm.id) {
      patchById(articleForm.id, submitForm)
        .then(res => {
          if (res.status === 200 && res.data.code === 1) {
            alert('update success');
            setFresh(Math.random());
          }
          setSelectedPost(undefined);
          setSelectedPostId(undefined);
        }).catch(err => console.log(err));
    } else {
      postNew(submitForm)
        .then(res => {
          if (res.status === 200 && res.data.code === 1) {
            alert('post success');
            setFresh(Math.random());
          }
          setSelectedPost(undefined);
          setSelectedPostId(undefined);
        }).catch(err => alert(err));
    }
  }

  const handlePrev = (e: any) => {
    if (postListPage > 1) {
      setPostListPage(postListPage - 1);
    } else {
      setPostListPage(1);
      alert('First Page');
    }
  }

  const handleNext = (e: any) => {
    if (postListPage * 8 < total) {
      setPostListPage(postListPage + 1);
    } else {
      setPostListPage(1);
      alert('Last Page');
    }
  }
  
  const handleDelete = (e: any, id: string) => {
    deleteById(id).then(res => {
      if (res.status === 200 && res.data.code === 1) {
        alert('Deleted');
        setFresh(Math.random());
      }
    }).catch(err => alert(err));
  }

  const postNewArticle = (e: any) => {
    const user = localStorage.getItem('user');
    let username = '';
    if (user) {
      const userJson = JSON.parse(user);
      username = userJson.username;
    }

    const newArticle: ArticleInterface = {
      title: '',
      author: username,
      content: '',
      cover: ''
    }
    setSelectedPost(newArticle);
  }

  const showLatestPost = (post: any) => {
    return (
      <div className="Admin-Article__Left--Newlist__latest">
        <h3 className="Admin-Article__Left--Newlist__latest--header">
           最 新 文 章
        </h3>
        <div className="Admin-Article__Left--Newlist__latest--container">
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
      </div>
    )
  }

  const showPostList = (post: any, index: number) => {
    return (
      <div key={index} className="item">
        <div className="left">
          <h4>{ post.title }</h4>
          <span>{ post.author }</span>
          <span> { dayjs(post.update_at).format('YYYY-MM-DD HH:mm:ss') }</span>
        </div>
        <div className="right">
          <Button onClick={(e: any) => setSelectedPostId(post.id)}>Edit</Button>
          <Button type="primary" onClick={(e:any) => setViewPostId(post.id)}>View</Button>
          <Button type="danger" onClick={(e: any) => handleDelete(e, post.id)}>Delete</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="Admin-Article">
      <div className="Admin-Article__Left">
        <div className="Admin-Article__Left--Newlist">
          { latestPost ? showLatestPost(latestPost) : null }
        </div>
      </div>
      <div className="Admin-Article__Right">
        <h3 className="header">文 章 列 表 <Button onClick={postNewArticle}>新增文章</Button></h3>
        <div className="Admin-Article__Right--PostList">
          <div className="items">
            { postList?.map(showPostList) }
          </div>
          <div className="prev-next">
            <Pagination onPrev={handlePrev} onNext={handleNext} />
          </div>
        </div>
      </div>
      {
        selectedPost
        ?
        <ArticleEditor
          post={selectedPost}
          onSubmit={handleSubmitForm}
          onCancel={(e: any) => setSelectedPost(undefined)}/>
        :
        null
      }
    </div>
  )
}

export default AdminArticle;