import './style.scss';
import React from 'react';
import { ArticleInterface } from './homepage.interface';
import ReactMarkdown from 'react-markdown';

interface Props {
  article: ArticleInterface,
  onClose: any
}

export default function (props: Props) {
  const { article } = props;

  const handleClick = (e: any) => {
    const { onClose } = props;
    if (onClose) {
      (onClose as React.MouseEventHandler<HTMLElement>)(e);
    }
  }

  return (
    <div
      className="ArticleFloatCard"
      onWheel={(e: any) => e.stopPropagation()}
      onTouchMove={(e: any) => e.stopPropagation()}
    >
      <div
        className="ArticleFloatCard__Close"
        onClick={handleClick}>X</div>
      <div
        className="ArticleFloatCard__Container"
        onWheel={(e: any) => e.stopPropagation()}
        onTouchMove={(e: any) => e.stopPropagation()}
      >
        <div className="ArticleFloatCard__Container--title">
          <h3>{article.title}</h3>
        </div>
        <div className="ArticleFloatCard__Container--content">
          <ReactMarkdown children={article.content} />
        </div>
      </div>
    </div>
  )
}