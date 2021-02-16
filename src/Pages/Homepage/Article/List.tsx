import React from 'react';
import { ArticleInterface } from './article.interface';
import moment from 'moment';
import multiavatar from '@multiavatar/multiavatar';

interface ListProps {
  articleList: ArticleInterface[],
  onClick?: React.MouseEventHandler<HTMLElement>;
}

const List: React.FC<ListProps> = (props: ListProps) => {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const { onClick } = props;
    if (onClick) {
      (onClick as React.MouseEventHandler<HTMLElement>)(e);
    }
  }

  const ListCard = (a: ArticleInterface, index: number) => {
    return(
      <div
        className="article animate__animated animate__fadeInUp"
        key={index}
      >
        <div
          className="left"
          data-id={a.id}
          onClick={handleClick}
          style={{
            backgroundImage: `url(${a.cover})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center'
          }}
        ></div>
        <div className="right">
          <span className="update-time">
            {moment(a.update_at.slice(0,10)).format('MMM D. YYYY')}
          </span>
          <h3 data-id={index} onClick={handleClick}>{a.title}</h3>
          <div className="desc">{a.desc || 'no desc'}</div>
          <div className="author">
            <span className="avatar"
              dangerouslySetInnerHTML={{__html: multiavatar(a.author)}}>
            </span>
            <span className="name">{a.author}</span>
          </div>
        </div>
      </div>
    )
  }

  return(
    <div className="article-list no-scroll-bar">
      { props.articleList.map((a, index) => ListCard(a, index)) }
    </div>
  )
}

export default List;