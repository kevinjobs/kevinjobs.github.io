import dayjs from 'dayjs';
import styled from 'styled-components';
import MarkdownIt from 'markdown-it';
import { IPost } from '@/apis';
import { Icon } from '@/components';
import { MdPluginImage } from './md-plugins';

const Article = styled.div`
  width: 1000px;
  margin: 0 auto;
  padding: 40px;
  background-color: #fff;
  .header {
    margin-bottom: 20px;
    .datetime {
      font-size: 14px;
      color: #a1a1a1;
      margin: 5px 0;
    }
    .author {
      color: #777;
      a {
        color: #000;
        &:hover {
          color: $primary;
        }
      }
      .author-icon {
        margin-right: 10px;
        color: inherit;
      }
    }
  }
  .content {
    line-height: 2;
    p {
      margin: 12px 0;
      color: #555555;
    }
    .content-image {
      width: fit-content !important;
      max-width: 80%;
      margin: 15px auto 0 auto !important;
      border-radius: 2px !important;
      img {
        width: 100% !important;
        border-radius: 2px !important;
      }
    }
    .content-image-alt {
      color: #999999;
      text-align: center;
    }
  }
`;

const ArticleContainer: React.FC<{article: IPost}> = props => {
  const md = new MarkdownIt().use(MdPluginImage);

  const { article } = props;

  return (
    <Article>
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
          <a href={`/profile/${article.author}`}>{ article.author }</a>
        </div>
      </div>
      <div className="content"
        dangerouslySetInnerHTML={{__html: md.render(article.content)}}>
      </div>
    </Article>
  )
};

export default ArticleContainer;