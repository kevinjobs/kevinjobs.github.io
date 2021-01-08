import * as React from 'react';
import { ArticleType } from '../../../Types';

interface Props {
  id?: string,
  articles: ArticleType[],
  filter: string,
  onClick?: React.MouseEventHandler<HTMLElement>;
}

export default class ArticleList extends React.Component<Props, any> {
  private handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const { onClick } = this.props;
    // console.log(e);
    if (onClick) {
      (onClick as React.MouseEventHandler<HTMLElement>)(e);
    }
  }

  render() {
    const ListCard = (a: ArticleType, index: number) => {
      return(
        <div
          className="article animate__animated animate__fadeInUp"
          key={index}
          data-index={index}
          onClick={this.handleClick}
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
          <div
            className="right"
            data-index={index}
            onClick={this.handleClick}
          >
            <h3 data-index={index} onClick={this.handleClick}>{a.title}</h3>
            <div className="info" data-index={index} onClick={this.handleClick}>
              <span data-index={index} onClick={this.handleClick}>{a.author}</span>
              <span data-index={index} onClick={this.handleClick}>{a.update_time}</span>
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