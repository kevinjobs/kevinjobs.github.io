import React from 'react';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import MarkdownIt from 'markdown-it';
import { IPost } from '@/apis';
import { Icon } from '@/components';

export interface PostPanelProps {
  post: IPost
};

const PostPanel: React.FC<PostPanelProps> = props => {
  const { post } = props;
  const md = new MarkdownIt();

  return (
    <div className="partial-article">
      <div className="partial-article-header">
        <h2 className="partial-article-title">{ post.title }</h2>
        <div className="partial-article-datetime">
          { '创建于: ' + dayjs(post.create_at).format('YYYY-MM-DD HH:mm:ss') }
        </div>
        <div className="partial-article-datetime"> 
          { '更新于: ' + dayjs(post.update_at).format('YYYY-MM-DD HH:mm:ss') }
        </div>
        <div className="partial-article-author">
          <Icon icon='user' className="icon-dark partial-article-author-icon" />
          <Link to={`/profile/${post.author}`}>{ post.author }</Link>
        </div>
      </div>
      <div className="partial-article-content"
        dangerouslySetInnerHTML={{__html: md.render(post.content)}}>
      </div>
    </div>
  )
}

export default PostPanel;