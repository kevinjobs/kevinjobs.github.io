import React from 'react';
import { Link } from 'react-router-dom';
import { getPostById, getPostList, patchById, deleteById, postNew } from '@/apis/post';
import { Button, Pagination } from '@/components';
import ArticleEditor from './editor';
import { ArticleInterface } from '@/pages';
import dayjs from 'dayjs';

const AdminArticle: React.FC = () => {
  const [postListPage, setPostListPage] = React.useState<number>(1);
  const [postList, setPostList] = React.useState<ArticleInterface []>();
  const [total, setTotal] = React.useState(0);
  const [selectedPostId, setSelectedPostId] = React.useState<string>();
  const [selectedPost, setSelectedPost] = React.useState<ArticleInterface>();
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
          <Link to={`/article/${post.id}`}><Button type="primary">View</Button></Link>
          <Button type="danger"
            onClick={(e: any) => handleDelete(e, post.id)}>Delete</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="Admin-Article shadow-card">
      <div className="Admin-Article__Container">
        <h3 className="header">文 章 列 表 <Button onClick={postNewArticle}>新增文章</Button></h3>
        <div className="Admin-Article__Right--PostList">
          <div className="items">
            { postList ? postList.map(showPostList) : <div className="mint-loader"></div> }
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