import React from 'react';
import classNames from 'classnames';
import { getPostList } from '@/apis/post';
import { getUser } from '@/apis/auth';
import { ArticleInterface } from '@/pages';
import multiavatar from '@multiavatar/multiavatar';
import { useViewport, breakpoint } from '@/hooks/viewportCtx';

export interface ProfileProps {};

const Profile: React.FC<ProfileProps | any> = (props) => {
  const [postList, setPostList] = React.useState<ArticleInterface>();
  const [user, setUser] = React.useState({username: ''});

  React.useEffect(() => {
    const username = props.match.params.username;
    // console.log(username);
    getPostList(1, 8, 0, username)
      .then(res => {
        if (res.status === 200 && res.data.data.items.length !== 0) {
          setPostList(res.data.data.items);
        }
      }).catch(err => console.log(err));
    getUser({username: username})
      .then(res => {
        if (res.status === 200) {
          setUser(res.data.data);
        }
      }).catch(err => console.log(err));
  }, [])

  const showPost = (post: ArticleInterface, index: number) => {
    let username = user ? user.username : '易名';
    return (
      <div className="item" key={index}>
        <h3>{ post.title }</h3>
        <div className="author">
          <span className="username"
          dangerouslySetInnerHTML={{__html: multiavatar(username)}}></span>
          <span>{ post.author }</span>
        </div>
        <div className="item-edit">
        </div>
      </div>
    )
  }

  const showIdCard = (user: any) => {
    const roles: {
      [key: string]: any
    } = {
      0: '超级用户',
      1: '管理员',
      2: '高级会员',
      3: '会员',
      4: '普通用户'
    }

    const genders: {
      [key: string]: any
    } = {
      0: '未知性别',
      1: '男性',
      2: '女性',
      3: '其他'
    }

    return (
      <div className="main-right-idcard">
        <div className="top">
          <div className="avatar"
            dangerouslySetInnerHTML={{__html: multiavatar(user.username)}}
          ></div>
          <div className="info">
            <div className="username">用户名: {user.username}</div>
            <p className="id" title={user.id}>ID: {user.id}</p>
            <div className="role">用户等级: {roles[user.role]}</div>
            <div className="gender">性别: {genders[user.gender]}</div>
          </div>
        </div>
        <div className="bottom-motto">
          { user.motto || '这个用户还有没有自我宣言' }
        </div>
      </div>
    )
  }

  const { width } = useViewport();

  const classname = classNames(
    'Profile',
    {
      'Mobile': width < breakpoint
    }
  )

  return (
    <div className={classname}>
      <div className="Profile-Container">
        <div className="header">
        </div>
        <div className="main">
          <div className="main-left">
            <div className="post-list">
              { postList ? postList.map(showPost) : null }
            </div>
          </div>
          <div className="main-right">
            { user ? showIdCard(user) : null }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;