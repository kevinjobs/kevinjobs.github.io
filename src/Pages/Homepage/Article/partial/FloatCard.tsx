import React from 'react';
import ReactMarkdown from 'react-markdown';
import { FullscreenOutlined, CloseOutlined } from '@ant-design/icons';
import { ArticleType } from '../../../Types';

interface Props {
  onClose?: React.MouseEventHandler<HTMLElement>,
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

  return(
    <div className="float-card fade-in" id={props.id}>
      <span className="close" onClick={handleClick}>
        <CloseOutlined style={{fontSize:'inherit'}} />
      </span>
      <div className="article-container no-scroll-bar">
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