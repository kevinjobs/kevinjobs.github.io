import React from 'react';
import ReactMarkdown from 'react-markdown';

import ArticleList from './partial/List';
import ArticleCate from './partial/Cate';
import LoadMore from './partial/Loadmore';
import DesktopNavbar from '../../Common/DesktopNavbar';
import { Dialog, FloatPanel } from '../../../Components';
import { message } from 'antd';
import { getArticles } from '../../../Apis/article.js';
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

class DesktopArticle extends React.Component<any, ArticleState> {
  state: ArticleState = {
    articles: [],
    page: 1,
    limit: 6,
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
    this.setState({filter: cate});
  }

  private onSubmit = (e: any) => {
    message.info('正在登录...');
    this.setState({mask: false});
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

  private handleWheel = (e: any) => {
    if (this.state.index !== -1) e.preventDefault();
  }

  componentDidMount() {
    getArticles(1, 7).then(res => {
      let data = res.data.data;
      this.setState({articles: data.items})
    });
    document.body.addEventListener('wheel', this.handleWheel, {passive: false});
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
      <div className="desktop-article">
        <DesktopNavbar menus={menus} onLogin={()=>this.setState({mask: !this.state.mask})} />
        <div className="article-seperator"></div>
        <ArticleCate
          categories={categories()}
          filter={this.state.filter}
          onFilter={this.onFilter}
        />
        <ArticleList
          id="article-list"
          articles={this.state.articles}
          filter={this.state.filter}
          onClick={this.openArticle}
        />
        <LoadMore loadmore={this.loadMore} more={this.state.more} />
        {
          this.state.index !== -1
          ?
          <FloatPanel onClose={this.onClose} onWheel={(e)=>e.stopPropagation()}>
            <ReactMarkdown>{ this.state.articles[this.state.index]?.content }</ReactMarkdown>
          </FloatPanel>
          :
          null
        }
        <Dialog
          isShow={this.state.mask}
          onSubmit={this.onSubmit}
          onCancel={()=>this.setState({mask:!this.state.mask})}
        />
        <div className="mask" style={{display:this.state.index !== -1 ? '' : 'none'}}></div>
      </div>
    )
  }
}

export default DesktopArticle;