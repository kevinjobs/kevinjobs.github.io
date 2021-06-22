import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { PostApi, IPost } from '@/apis';
import { Button, Pagination, Dropdown, Modal } from '@/components';
import PostCard from '../../_partial/post-card';

const AdminPostsPage: React.FC = () => {
  const [postListPage, setPostListPage] = React.useState<number>(1);
  const [postList, setPostList] = React.useState<IPost []>();
  const [total, setTotal] = React.useState(0);
  const [fresh, setFresh] = React.useState<number>(0);
  const [postType, setPostType] = React.useState('article');

  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [postToBeDeletedId, setPostToBeDeletedId] = React.useState('');

  const history = useHistory();

  const PostTypeMap: {[key: string]: string} = {
    article: '文章',
    picture: '照片'
  };

  const handlePrev = (e: any) => {
    if (postListPage > 1) {
      setPostListPage(postListPage - 1);
    } else {
      // setPostListPage(1);
      window.alert('已经第一页');
    }
  }

  const handleNext = (e: any) => {
    if (postListPage * 5 < total) {
      setPostListPage(postListPage + 1);
    } else {
      // setPostListPage(1);
      window.alert('已经是最后一页');
    }
  }

  const handleClickToDelete = (e: any, id: string) => {
    setIsModalVisible(true);
    setPostToBeDeletedId(id);
  }
  
  const handleConfirm = (e: any) => {
    const id = postToBeDeletedId;
    PostApi.deleteById(id).then(res => {
      if (res.status === 200 && res.data.code === 1) {
        // window.alert('Deleted');
        setFresh(Math.random());
      }
    }).catch(err => alert(err));
  }

  const PostsContainer = styled.div`
    padding: 0 20px 0 0;
    width: 100%;
    height: 100%;
    .post-list {
      padding: 0px 40px;
      .items {
        .item { cursor: pointer; }
        }
      .prev-next {
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  `;

  const Header = styled.div`
    height: 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
    .select-post-type {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-grow: 1;
    }
  `;

  const renderPostItem = (post: any, index: number) => {
    return (
      <div key={index} className="item">
        <PostCard post={post} onDelete={(e: any) => handleClickToDelete(e, post._id)} />
      </div>
    )
  }

  React.useEffect(() => {
    PostApi
      .getPostList(postListPage, 5, postType)
      .then(res => {
        setPostList(res.data.data.items);
        setTotal(res.data.data.total);
      });
  }, [postListPage, fresh, postType]);

  return (
    <PostsContainer>
      <Header>
        <div className="select-post-type">
          <Dropdown title={PostTypeMap[postType]}>
            <div className="item" onClick={e => {
              postType === 'article'
                ? setPostType('picture')
                : setPostType('article');
            }}>
              <p>{postType === 'article' ? '照片' : '文章'}</p>
            </div>
          </Dropdown>
        </div>
        <Button onClick={e => history.push('/admin/new')}>新增</Button>
      </Header>
      <div className="post-list">
        <div className="items">
          { postList ? postList.map(renderPostItem) : <div className="mint-loader"></div> }
        </div>
        <div className="prev-next">
          <Pagination onPrev={handlePrev} onNext={handleNext} />
        </div>
      </div>
      <Modal
        title="Delete Confirm"
        content="Confirm to delete this post?"
        visible={isModalVisible}
        onConfirm={(e: any) => handleConfirm}
        onCancel={(e: any) => setIsModalVisible(false)}
        onClose={e => setIsModalVisible(false)}
      />
    </PostsContainer>
  )
}

export default AdminPostsPage;