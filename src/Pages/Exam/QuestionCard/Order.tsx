import React from 'react';

interface Props {
  total: number,
  onSelect?: any
}

const Order: React.FC<Props> = (props) => {
  const handleClick = (e: any) => {
    const { onSelect } = props;
    if (onSelect) {
      (onSelect as React.MouseEventHandler<HTMLDivElement>)(e);
    }
  }

  const orders = () => {
    let arr: number[] = [];
    for (let i = 0; i < props.total; i ++) {
      arr.push(i)
    }
    return arr
  }

  return(
    <div className="order">
      <h3>选择题目</h3>
      <div className="order-count">
      {
        orders().map((index) => {
          return(
            <div
              key={index}
              className="count"
              data-order={index}
              onClick={handleClick}
            >
              { index + 1}
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default Order;