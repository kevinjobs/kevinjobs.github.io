import React from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import multiavatar from '@multiavatar/multiavatar';
import { IPost } from '@/types';
import { Transition } from '@/components';

interface ListProps {
  articleList: IPost[],
  onOpen?: React.MouseEventHandler<HTMLElement>;
}

const List: React.FC<ListProps> = (props: ListProps) => {
  const [hover, setHover] = React.useState('');

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const { onOpen } = props;
    if (onOpen) {
      (onOpen as React.MouseEventHandler<HTMLElement>)(e);
    }
  }

  const handleMouseEnter = (e: any) => {
    setHover(e.target.dataset['id']);
  };

  const renderItem = (a: IPost, index: number) => {
    return(
      <div
        className="article-list-item"
        key={index}
        data-id={a.id}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={e => setHover('')}
      >
        <div className="cover">
          <Link to={`/article/${a._id}`} className="cover">
            <img
              src={a.cover}
              alt={a.title}
              data-id={a._id}
              onClick={handleClick}
            />
          </Link>
        </div>
        <Transition
          in={hover === a._id ? true : false}
          timeout={300}
          animation="FadeInOut"
        >
          <div className="infos">
            <span className="datetime">
              { dayjs(a.update_at).format('YYYY年M月D日') }
            </span>
            <h3 className="title">
              <Link to={`/article/${a._id}`}>{a.title}</Link>
            </h3>
            <div className="author">
              <span
                className="author-avatar"
                dangerouslySetInnerHTML={{__html: multiavatar(a.author)}}>
              </span>
              <span className="author-name">
                <Link to={`/profile/${a.author}`}>{a.author}</Link>
              </span>
            </div>
          </div>
        </Transition>
      </div>
    )
  }

  return <>{ props.articleList.map(renderItem) }</>
}

export default List;