import React from 'react';
import classNames from 'classnames';
import { PaginationProps } from './index';

const Paging: React.FC<PaginationProps> = (props: PaginationProps) => {
  const [pageArr, setPageArr] = React.useState<number[]>();

  const { type = 'default', onPrev, onNext, totals = 2, pages = 8 } = props;

  const showPages = (totals: number) => {
    if (totals <= 2) return null;
    else {
      if (totals <= 7) {
        return calculatePage(arrayFromInt(totals));
      } else {
        return null;
      }
    }
  }

  const calculatePage = (pageArr: number[]) => {
    return (
      <div className="pages">
        {
          pageArr.map((page: number, index: number) => {
            return (
              <span
                key={index}
                data-current={page}
                className="paging">{ page }</span>
            )
          })
        }
      </div>
    )
  }

  const classnames = classNames({
    'mint-pagination': true,
    [`mint-pagination-${type}`]: type
  })

  const arrayFromInt = (int: number) => {
    const arr: number[] = [];
    for (let i = 0; i < int; i ++) arr.push(i+1);
    return arr;
  }

  return (
    <div className={classnames}>
      <span role="button" className="paging prev" onClick={onPrev}>Prev</span>
      { totals ? showPages(totals) : null }
      <span role="button" className="paging next" onClick={onNext}>Next</span>
    </div>
  )
}

export default Paging;