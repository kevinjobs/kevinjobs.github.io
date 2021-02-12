import React from 'react';
import { ArticleType } from '../../../Types';
import moment from 'moment';
import multiavatar from '@multiavatar/multiavatar';

interface Props {
  id?: string,
  articles: ArticleType[],
  filter: string,
  onClick?: React.MouseEventHandler<HTMLElement>;
  words?: number
}

export default class ArticleList extends React.Component<Props, any> {
  private handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const { onClick } = this.props;
    // console.log(e);
    if (onClick) {
      (onClick as React.MouseEventHandler<HTMLElement>)(e);
    }
  }

  componentDidMount() {}

  render() {
    const ListCard = (a: ArticleType, index: number) => {
      return(
        <div
          className="article animate__animated animate__fadeInUp"
          key={index}
        >
          <div
            className="left"
            data-index={index}
            onClick={this.handleClick}
            style={{
              backgroundImage: `url(${a.cover})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center'
            }}
          ></div>
          <div className="right">
            <span className="category">{a.category.toUpperCase()}</span>
            <span className="update-time">
              {moment(a.update_time.slice(0,10)).format('MMM D. YYYY')}
            </span>
            <h3 data-index={index} onClick={this.handleClick}>{a.title}</h3>
            <div className="content">
              {a.content.slice(0,this.props.words||80)}
            </div>
            <div className="author">
              <span className="avatar"
                dangerouslySetInnerHTML={{__html: multiavatar(a.author)}}>
              </span>
              <span className="name">{a.author}</span>
            </div>
          </div>
        </div>
      )
    }

    return(
      <div className="article-list no-scroll-bar" id={this.props.id}>
        {
          this.props.articles.map((a, index) => {
            if (this.props.filter === 'all') {
              return ListCard(a, index)
            } else if (a.category === this.props.filter) {
              return ListCard(a, index)
            } else {
              return ''
            }
          })
        }
      </div>
    )
  }
}