import React from 'react';
import ReactMarkdown from 'react-markdown';
import { FullscreenOutlined, CloseOutlined } from '@ant-design/icons';
import { ArticleType } from '../../../Types';

interface Props {
  onClose?: React.MouseEventHandler<HTMLElement>,
  onWheel?: React.WheelEventHandler<HTMLElement>,
  onTouchMove?: React.TouchEventHandler<HTMLElement>,
  article: ArticleType,
  id?: string
}

const ArticleCard: React.FC<Props> = (props) => {

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const { onClose } = props;
    if (onClose) {
      (onClose as React.MouseEventHandler<HTMLElement>)(e);
    }
  }

  const handleWheel = (e: React.WheelEvent<HTMLElement>) => {
    const { onWheel } = props;
    if (onWheel) {
      (onWheel as React.WheelEventHandler<HTMLElement>)(e);
    }
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLElement>) => {
    const { onTouchMove } = props;
    if (onTouchMove) {
      (onTouchMove as React.TouchEventHandler<HTMLElement>)(e);
    }
  }

  return(
    <div className="float-card fade-in" id={props.id} onWheel={handleWheel} onTouchMove={handleTouchMove}>
      <span className="close">
        <h3>{props.article.title}</h3>
        <CloseOutlined style={{fontSize:'inherit'}} onClick={handleClick} />
      </span>
      <div className="article-container no-scroll-bar" onWheel={handleWheel} onTouchMove={handleTouchMove}>
        <FullscreenOutlined style={{display:'none'}} />
        <ReactMarkdown>
          {
            props.article ? props.article.content : ''
          }
        </ReactMarkdown>
      </div>
    </div>
  )
}

export default ArticleCard;