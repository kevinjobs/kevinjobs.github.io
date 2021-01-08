import React, { useState } from 'react';

interface Props {
  filter: string,
  categories: string[],
  onFilter?: React.MouseEventHandler<HTMLElement>
}

const ArticleCate: React.FC<Props> = (props) => {
  const [cate] = useState('all');

  const className = (cate: string, filter: string) => {
    if (filter === cate) {
      return 'selected'
    } else {
      return ''
    }
  }

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const { onFilter } = props;
    if (onFilter) {
      (onFilter as React.MouseEventHandler<HTMLElement>)(e);
    }
  }

  const diffCategories = (cates: string[]) => {
    const s: Set<string> = new Set(cates);
    const arr: string[] = Array.from(s);
    return arr;
  }

  return(
    <div className="article-navbar no-scroll-bar" onClick={handleClick} data-cate={cate}>
      <ul onClick={handleClick} data-cate={cate}>
        {
          diffCategories(props.categories).map((cate, index) => {
            return(
              <li
                key={index}
                onClick={handleClick}
                data-cate={cate}
                className={className(cate, props.filter)}
              >
                <span onClick={handleClick} data-cate={cate}>{cate.toUpperCase()}</span>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default ArticleCate;