import React from 'react';
import ReactMarkdown from 'react-markdown';
import classNames from 'classnames';

import List from './List';
import { MobileNavbar, FloatPanel, Divider } from '../../../Components';
import DesktopNavbar from '../../Common/DesktopNavbar';
import { getPostList, getPostById } from '../../../Apis/post';
import { ArticleInterface } from './article.interface';

import './style.scss';

interface ArticleProps {
  type: number; // 1: mobile; 2: desktop: 3: pad; 4: ...
}

interface ArticleState {
  articleList: ArticleInterface[],
  currentPage: number,
  pageSize: number,
  more: boolean,
  currentPost: ArticleInterface | undefined
}

class Article extends React.Component<ArticleProps, ArticleState> {
  state: ArticleState = {
    articleList: [],
    currentPage: 1,
    pageSize: 6,
    more: true,
    currentPost: undefined
  }

  private onFloatPanel = (e: any) => {
    const id = e.target.attributes.getNamedItem('data-id').value;
    getPostById(id).then(res => {
      const data = res.data.data;
      this.setState({currentPost: data});
    }).catch(err => console.log(err));
  }

  public loadMore = () => {
    if (this.state.more) {
      getPostList(this.state.currentPage+1, this.state.pageSize).then(res => {
        const data = res.data.data;
        this.setState({articleList: this.state.articleList.concat(data.items)});
        if (this.state.pageSize * (this.state.currentPage+1) >= data.total) {
          this.setState({more: false});
        } else {
          this.setState({currentPage: this.state.currentPage + 1})
        }
      })
    }
  }

  private handleTouchMove = (e: any) => {
    if (this.state.currentPost) {
      e.stopPropagation();
      e.preventDefault();
    }
  }

  componentDidMount() {
    getPostList(1, 7).then(res => {
      let data = res.data.data;
      this.setState({articleList: data.items})
    });
    document.body.addEventListener('touchmove', this.handleTouchMove, {passive:false});
    document.body.addEventListener('wheel', this.handleTouchMove, {passive:false});
  }

  componentWillUnmount() {
    document.body.removeEventListener('touchmove', this.handleTouchMove);
    document.body.removeEventListener('wheel', this.handleTouchMove);
  }

  render() {
    const menus = [
      'home',
      'gallery',
      'about'
    ]

    const showLoadmore = (more: boolean) => {
      const text = more ? '加载更多' : '没有更多了';
      return (
        <Divider>
          <span onClick={e => this.loadMore()} style={{cursor:'pointer'}}>{ text }</span>
        </Divider>
      )
    }

    const showMask = (post: ArticleInterface | undefined) => {
      if (this.props.type === 2) {
        return post ? <div className="mask"></div> : null;
      }
    }

    const showFloatPanel = (post: ArticleInterface | undefined) => {
      if (post) {
        const { content } = post;
        if (content) {
          return(
            <FloatPanel
              onClose={e => this.setState({currentPost: undefined})}
              onTouchMove={e => e.stopPropagation()}
              onWheel={e => e.stopPropagation()}
            >
              <ReactMarkdown>{ content }</ReactMarkdown>
            </FloatPanel>
          )
        }
      }
    }

    const classnames = classNames({
      "mobile-article": this.props.type === 1 ? true : false,
      "desktop-article": this.props.type === 2 ? true : false
    });

    return(
      <div className={classnames}>
        { this.props.type === 1 ? <MobileNavbar menus={menus} /> : <DesktopNavbar menus={menus} /> }
        <List
          articleList={this.state.articleList}
          onClick={this.onFloatPanel}
        />
        { showLoadmore(this.state.more) }
        { showFloatPanel(this.state.currentPost) }
        { showMask(this.state.currentPost) }
      </div>
    )
  }
}

export default Article;