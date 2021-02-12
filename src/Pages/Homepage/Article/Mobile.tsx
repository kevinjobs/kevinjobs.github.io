import React from 'react';
import ReactMarkdown from 'react-markdown';

import ArticleList from './partial/List';
import ArticleCate from './partial/Cate';
import LoadMore from './partial/Loadmore';

import { MobileNavbar, FloatPanel } from '../../../Components';

import { getArticles } from '../../../Apis/article.js';
import { message } from 'antd';
import { ArticleType } from '../../Types';
import './style.scss';

interface ArticleState {
  articles: ArticleType[],
  page: number,
  limit: number,
  more: boolean,
  filter: string,
  index: number,
  mask: boolean
}

class MobileArticle extends React.Component<any, ArticleState> {
  state: ArticleState = {
    articles: [],
    page: 1,
    limit: 5,
    more: true,
    filter: 'all',
    index: -1,
    mask: false
  }

  private openArticle = (e: any) => {
    const index: number = e.target.attributes.getNamedItem('data-index').value;
    this.setState({index: index});
  }

  private onClose = () => {
    this.setState({index: -1});
    this.setState({mask: false});
  }

  private onFilter = (e: any) => {
    const cate: string = e.target.attributes.getNamedItem('data-cate').value;
    console.log('selected cate:', cate);
    this.setState({filter: cate});
  }

  public loadMore = () => {
    if (this.state.more) {
      getArticles(this.state.page+1, this.state.limit).then(res => {
        let data = res.data.data;
        this.setState({articles: this.state.articles.concat(data.items)});
        if (this.state.limit * (this.state.page+1) >= data.total) {
          this.setState({more: false});
          message.warning('最后一页');
        } else {
          this.setState({page: this.state.page + 1})
        }
      })
    }
  }

  private handleTouchMove = (e: any) => {
    if (this.state.index !== -1) {
      e.preventDefault();
    }
  }

  componentDidMount() {
    getArticles(this.state.page, this.state.limit).then(res => {
      let data = res.data.data;
      this.setState({articles: data.items})
    });
    document.body.addEventListener('touchmove', this.handleTouchMove, {passive:false});
  }

  componentWillUnmount() {
    document.body.removeEventListener('touchmove', this.handleTouchMove);
  }

  render() {
    const categories = () => {
      let arr: string[] = ['all']
      this.state.articles.map((a) => {
        arr.push(a.category);
        return arr
      })
      return arr
    }

    const menus = [
      'home',
      'gallery',
      'about'
    ]

    return(
      <div className="mobile-article">
        <MobileNavbar menus={menus} />
        <div className="article-seperator"></div>
        <ArticleCate
          categories={categories()}
          filter={this.state.filter}
          onFilter={this.onFilter}
        />
        <ArticleList
          articles={this.state.articles}
          filter={this.state.filter}
          onClick={this.openArticle}
          words={20}
        />
        <LoadMore loadmore={this.loadMore} more={this.state.more} />
        {
          this.state.index !== -1
          ?
          <FloatPanel onClose={this.onClose} onTouchMove={(e)=>e.stopPropagation()}>
            <ReactMarkdown>{ this.state.articles[this.state.index]?.content }</ReactMarkdown>
          </FloatPanel>
          :
          null
        }
      </div>
    )
  }
}

export default MobileArticle;