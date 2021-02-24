import React from 'react';

export interface ArticleInterface {
  [key: string]: any,
  id?: string,
  cover: string,
  title: string,
  author: string,
  content: string,
  create_at?: string,
  update_at?: string,
  tags?: string,
  desc?: string,
  exif?: any
}

export interface ArticlePageProps {
  article: ArticleInterface
}

const ArticlePage: React.FC<ArticleInterface> = (props) => {
  return (
    <div className="ArticlePage"></div>
  )
}

export default ArticlePage;