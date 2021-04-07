import React from 'react';
import { Link } from 'react-router-dom';
import MarkdownIt from 'markdown-it';
import classNames from 'classnames';
import dayjs from 'dayjs';
import { PostApi, IPost } from '@/apis';
import { Icon } from '@/components';
import { useViewport, breakpoint } from '@/hooks/viewportCtx';
import { useTheme } from '@/hooks';
import { MdPluginImage } from './md-plugins';

export interface ArticlePageProps {
  id: string
}

const ArticlePage: React.FC<ArticlePageProps | any> = (props) => {
  const [article, setArticle] = React.useState<IPost>();
  const { theme } = useTheme();
  const { width } = useViewport();
  const md = new MarkdownIt().use(MdPluginImage);

  React.useEffect(() => {
    const { id } = props.match.params;
    PostApi.getPostById(id).then(res => {
      if (res.status === 200 && res.data.code === 1) {
        setArticle(res.data.data);
      }
    }).catch(err => console.log(err));
  }, [])

  const classname = classNames(
    'ArticlePage',
    {
      'Mobile': width < breakpoint,
      'Night': theme === 'night'
    }
  )

  if (article) {
    return (
      <div className={classname}>
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
              <Link to={`/profile/${article.author}`}>{ article.author }</Link>
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
      <div className={classname}>
        <div className="ArticlePage-Container shadow-card">
          <p style={{textAlign: 'center'}}>未能获取文章详情</p>
        </div>
      </div>
    )
  }
}

export default ArticlePage;