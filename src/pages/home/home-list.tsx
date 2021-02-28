import React from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import multiavatar from '@multiavatar/multiavatar';
import { ArticleInterface } from '@/pages';
import { Image } from '@/components';

interface ListProps {
  articleList: ArticleInterface[],
  onOpen?: React.MouseEventHandler<HTMLElement>;
}

const List: React.FC<ListProps> = (props: ListProps) => {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const { onOpen } = props;
    if (onOpen) {
      (onOpen as React.MouseEventHandler<HTMLElement>)(e);
    }
  }

  const ListCard = (a: ArticleInterface, index: number) => {
    return(
      <div className="ArticleList__item shadow-card" key={index}>
        {/* article cover */}
        <Image
          prefixCls="ArticleList__item--Cover"
          src={a.cover}
          alt={a.title}
          data-picid={a.id}
          onClick={handleClick}
        />
        {/* article details */}
        <div className="ArticleList__item--Info">
          <span className="ArticleList__item--Info__datetime">
            { dayjs(a.update_at).format('YYYY-MM-DD') }
          </span>
          <h3 className="ArticleList__item--Info__title">
            <Link to={`/article/${a.id}`}>{a.title}</Link>
          </h3>
          <p className="ArticleList__item--Info__desc">{a.desc}</p>
          <div className="ArticleList__item--Info__author">
            <span
              className="ArticleList__item--Info__author-avatar"
              dangerouslySetInnerHTML={{__html: multiavatar(a.author)}}>
            </span>
            <span className="ArticleList__item--Info__author-name">
              <Link to={`/profile/${a.author}`}>{a.author}</Link>
            </span>
          </div>
        </div>
      </div>
    )
  }

  return <>{ props.articleList.map(ListCard) }</>
}

export default List;