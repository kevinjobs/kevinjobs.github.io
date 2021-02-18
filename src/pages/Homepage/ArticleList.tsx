import React from 'react';
import { ArticleInterface } from './homepage.interface';
import multiavatar from '@multiavatar/multiavatar';

interface ListProps {
  articleList: ArticleInterface[],
  onOpen: React.MouseEventHandler<HTMLElement>;
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
      <div className="ArticleList__item" key={index}>
        {/* article cover */}
        <div className="ArticleList__item--Cover">
          <img src={a.cover} alt={a.title} data-id={a.id} onClick={handleClick} />
        </div>
        {/* article details */}
        <div className="ArticleList__item--Info">
          <div className="ArticleList__item--Info__datetime">{a.update_at}</div>
          <h3
            className="ArticleList__item--Info__title"
            onClick={handleClick}
            data-id={a.id}>{a.title}</h3>
          <div className="ArticleList__item--Info__desc">{a.desc}</div>
          <div className="ArticleList__item--Info__author">
            <span
              className="ArticleList__item--Info__author-avatar"
              dangerouslySetInnerHTML={{__html: multiavatar(a.author)}}>
            </span>
            <span className="ArticleList__item--Info__author-name">{a.author}</span>
          </div>
        </div>
      </div>
    )
  }

  return(
    <div className="ArticleList">
      { props.articleList?.map(ListCard) }
    </div>
  )
}

export default List;