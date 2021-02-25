import React from 'react';
import { Link } from 'react-router-dom';
import MarkdownIt from 'markdown-it';
import dayjs from 'dayjs';
import { getPostById } from '@/apis/post';
import { Icon } from '@/components';

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
  id: string
}

const ArticlePage: React.FC<ArticlePageProps | any> = (props) => {
  const [article, setArticle] = React.useState<ArticleInterface>();

  const md = new MarkdownIt();

  React.useEffect(() => {
    const { id } = props.match.params;
    getPostById(id).then(res => {
      if (res.status === 200 && res.data.code === 1) {
        setArticle(res.data.data);
      }
    }).catch(err => console.log(err));
  }, [])

  if (article) {
    return (
      <div className="ArticlePage">
        <div className="ArticlePage-Container shadow-card">
          <div className="header">
            <h2 className="title">{ article.title }</h2>
            <div className="datetime">
              { '创建于: ' + dayjs(article.create_at).format('YYYY-MM-DD HH:mm:ss') }
            </div>
            <div className="datetime"> 
              { '更新于: ' + dayjs(article.update_at).format('YYYY-MM-DD HH:mm:ss') }
            </div>
            <div className="author">
              <Icon icon='user' className="icon-dark author-icon" />
              <Link to={`/user/${article.author}`}>{ article.author }</Link>
            </div>
          </div>
          <div className="content"
            dangerouslySetInnerHTML={{__html: md.render(article.content)}}>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="ArticlePage">
        <div className="ArticlePage-Container shadow-card">
          <p style={{textAlign: 'center'}}>未能获取文章详情</p>
        </div>
      </div>
    )
  }
}

export default ArticlePage;