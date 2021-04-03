import React from 'react';
import { Link } from 'react-router-dom';
import multiavatar from '@multiavatar/multiavatar';
import dayjs from 'dayjs';
import { IPost } from '@/types';
import { Icon } from '@/components';

export const UserRoleLevel: {
  [key: number]: any
} = {
  0: '超级用户',
  1: '管理员',
  2: '高级会员',
  3: '会员',
  4: '普通用户'
}

export interface PostGlanceProps {
  post: IPost,
  onEdit?: any,
  onDelete?: any
} 

const PostGlance: React.FC<PostGlanceProps> = props => {
  /**
   * render the post for list card of profile
   * @param post
   * @param index
   */
  const { post, onEdit, onDelete } = props;

  const baseUrl = 'https://mintforge-1252473272.cos.ap-nanjing.myqcloud.com/image/';

  return (
    <div className="post-glance">
      <h3><Link to={`/article/${post._id}`}>
        {
          post.title === ' '
            ? 'No Title'
            : post.title
        }
      </Link></h3>
      <div className="author">
        <span className="username"
        dangerouslySetInnerHTML={{__html: multiavatar(post.author)}}></span>
        <span>
          <div><Link to={`/profile/${post.author}`}>{post.author}</Link></div>
          {/* <div><small>{ UserRoleLevel[user?.role] || '未知用户等级' }</small></div> */}
        </span>
      </div>
      <div className="item-edit">
        <span className="item-edit__item" onClick={onEdit}>
          <Icon icon="pen" theme="dark" />
        </span>
        <span className="item-edit__item" onClick={onDelete}>
          <Icon icon="trash" theme="dark" />
        </span>
        <span className="item-edit__item">
          <Icon icon="align-justify" theme="dark" />
        </span>
        <span className="item-edit__item" style={{marginLeft: -5}}>
          创建于 { dayjs(post.create_at).format('YYYY-MM-DD mm:HH:ss') }
        </span>
        <span className="item-edit__item" style={{marginLeft: -20}}>
          修改于 { dayjs(post.update_at).format('YYYY-MM-DD mm:HH:ss') }
        </span>
      </div>
      <div className="cover">
        {
          post.type === 'picture'
            ? <img src={baseUrl + post.cover?.toLowerCase()} alt={post.title} />
            : <img src={post.cover} alt={post.title} />
        }
      </div>
    </div>
  )
}

export default PostGlance;