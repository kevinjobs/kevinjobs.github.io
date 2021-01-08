import React from 'react';
import ArticleList from './partial/List';
import ArticleCard from './partial/FloatCard';
import ArticleCate from './partial/Cate';
import LoadMore from './partial/Loadmore';
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

  private handleClick = (e: any) => {
    const index: number = e.target.attributes.getNamedItem('data-index').value;
    // console.log();
    this.setState({index: index});
    // this.setState({mask: true});
  }

  private onClose = () => {
    // console.log(e);
    this.setState({index: -1});
    this.setState({mask: false});
  }

  private onFilter = (e: any) => {
    const cate: string = e.target.attributes.getNamedItem('data-cate').value;
    console.log('selected cate:', cate);
    this.setState({filter: cate});
  }

  public loadMore = () => {
    // console.log(e)
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

  componentDidMount() {
    getArticles(this.state.page, this.state.limit).then(res => {
      let data = res.data.data;
      this.setState({articles: data.items})
    })
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

    const showArticleCard = () => {
      if (this.state.index === -1) {
        return <div></div>
      } else {
        return(
          <ArticleCard
            article={this.state.articles[this.state.index]}
            onClose={this.onClose}
          />
        )
      }
    }

    return(
      <div className="mobile-article">
        <div className="article-seperator"></div>
        <ArticleCate
          categories={categories()}
          filter={this.state.filter}
          onFilter={this.onFilter}
        />
        <ArticleList
          articles={this.state.articles}
          filter={this.state.filter}
          onClick={this.handleClick}
        />
        <LoadMore loadmore={this.loadMore} more={this.state.more} />
        { showArticleCard() }
        {
          this.state.mask ? <div className="mask fade-in"></div> : <></>
        }
      </div>
    )
  }
}

export default MobileArticle;