import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import { getPostList } from '@/apis/post';
import { getUser } from '@/apis/auth';
import { ArticleInterface } from '@/types';
import multiavatar from '@multiavatar/multiavatar';
import { useViewport, breakpoint } from '@/hooks/viewportCtx';
import { Icon } from '@/components';
import { useTheme } from '@/hooks';

export interface ProfileProps {
  fresh?: any
};

const roles: {
  [key: string]: any
} = {
  0: '超级用户',
  1: '管理员',
  2: '高级会员',
  3: '会员',
  4: '普通用户'
}

const Profile: React.FC<ProfileProps | any> = (props) => {
  const [postList, setPostList] = React.useState<ArticleInterface>();
  const [user, setUser] = React.useState({username: '', role: 4});
  const [loginUser, setLoginUser] = React.useState('');

  React.useEffect(() => {
    const username = props.match.params.username;
    // console.log(username);
    getPostList(1, 8, 'article', username)
      .then(res => {
        if (res.status === 200 && res.data.data.items.length !== 0) {
          setPostList(res.data.data.items);
        }
      }).catch(err => {
        // console.log(err);
        setPostList(undefined);
      });

    getUser({username: username})
      .then(res => {
        if (res.status === 200) {
          setUser(res.data.data);
        }
      }).catch(err => {
        console.log(err);
        setUser({username: '', role: 9});
      });
  }, [props.fresh])

  React.useEffect(() => {
    const localUser = localStorage.getItem('user');
    if (localUser) {
      setLoginUser(JSON.parse(localUser)['username']);
    }
  }, [props.fresh])

  const renderModifyItem = (
    <>
      <span className="item-edit__item">
        <Icon icon="pen" theme="dark" />
      </span>
      <span className="item-edit__item">
        <Icon icon="trash" theme="dark" />
      </span>
      <span className="item-edit__item">
        <Icon icon="align-justify" theme="dark" />
      </span>
    </>
  )

  const renderPost = (post: ArticleInterface, index: number) => {
    /**
     * render the post for list card of profile
     * @param post
     * @param index
     */
    let username = user ? user.username : '易名';
    return (
      <div className="item" key={index}>
        <h3><Link to={`/article/${post.id}`}>{ post.title }</Link></h3>
        <div className="author">
          <span className="username"
          dangerouslySetInnerHTML={{__html: multiavatar(username)}}></span>
          <span>
            <div>{ post.author }</div>
            <div><small>{ roles[user?.role] || '未知用户等级' }</small></div>
          </span>
        </div>
        <div className="item-edit">
          {
            (loginUser === props.match.params.username || loginUser === 'admin')
              && renderModifyItem
          }
          <span className="item-edit__item" style={{marginLeft: -5}}>
            修改于 { dayjs(post.update_at).format('YYYY-MM-DD mm:HH:ss') }
          </span>
        </div>
        <div className="cover">
          <img src={post.cover} alt={post.title} />
        </div>
      </div>
    )
  }

  const showIdCard = (user: any) => {
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
          <p>{ user.motto || '这个用户还有没有自我宣言' }</p>
        </div>
      </div>
    )
  }

  const { width } = useViewport();
  const { theme } = useTheme();

  const classname = classNames(
    'Profile',
    {
      'Mobile': width < breakpoint,
      [`theme-${theme}`]: theme
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
              { postList && postList.map(renderPost) }
            </div>
          </div>
          <div className="main-right">
            { user && showIdCard(user) }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;