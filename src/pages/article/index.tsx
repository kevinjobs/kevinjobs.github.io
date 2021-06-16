import React from 'react';
import { Motion, spring, presets } from 'react-motion';
import styled from 'styled-components';
import { PostApi, IPost } from '@/apis';
import { Navbar } from '@/components';
import { THEME } from '@/config';
import { useDevice, useTheme } from '@/hooks';
import ArticleContainer from './article';

export interface ArticlePageProps {
  id: string
}

const ArticlePage: React.FC<ArticlePageProps | any> = (props) => {
  const device = useDevice();
  const theme = useTheme();

  const [article, setArticle] = React.useState<IPost>();
  const [isNavbarHidden, setIsNavbarHidden] = React.useState(false);

  const handleScroll = (e: any) => {
    console.log(e.target.scrollingElement.scrollTop);
    const scrollTop = e.target.scrollingElement.scrollTop;
    if (scrollTop > 120) {
      setIsNavbarHidden(true);
    } else {
      setIsNavbarHidden(false);
    }
  }

  const Article = styled.div`
    background-color: ${THEME[theme].bgColor};
    padding: 0 0 32px 0;
    .article-page-navbar {
      width: 1000px;
      height: 65px;
      margin: 0 auto;
      position: sticky;
      top: 0;
      overflow: hidden;
      background-color: #fff;
      box-shadow: 0 2px 2px rgba(0,0,0,0.1);
    }
    .article-page-container {
      margin: 8px 0 0 0;
    }
  `;

  const TextNavbar = styled.div`
    height: 65px;
    padding: 0 64px;
    display: flex;
    align-items: center;
  `;

  // 获取文章
  React.useEffect(() => {
    // 通过 url 最后获取文章 id
    const { id } = props.match.params;
    // 取回文章
    PostApi.getPostById(id).then(res => {
      if (res.data.code === 1) {
        setArticle(res.data.data);
      };
    });
  }, [props.match.params]);

  // 监听滚动事件
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Article className={`article-page ${device} ${theme}`}>
      <div className="article-page-navbar">
        <Motion style={{x: spring(isNavbarHidden ? 100 : 0, presets.stiff)}}>
          { ({x}) => <Navbar style={{transform: `translateY(-${x}%)`}} /> }
        </Motion>
        <Motion style={{x: spring(isNavbarHidden ? 100 : 0, presets.stiff)}}>
          {
            ({x}) => (
              <TextNavbar style={{transform: `translateY(-${x}%)`}}>
                <h2>{ article?.title }</h2>
              </TextNavbar>
            )
          }
        </Motion>
      </div>
      <div className="article-page-container">
        { article && <ArticleContainer article={article} /> }
      </div>
    </Article>
  )
}

export default ArticlePage;