import React from 'react';
import { SubjectType } from '../Types';
import { Rate } from 'antd';

interface Props {
  subjects: SubjectType[],
  onClick?: any,
}

export default class Subject extends React.Component<Props, any> {

  private handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const { onClick } = this.props;
    if (onClick) {
      (onClick as React.MouseEventHandler<HTMLElement>)(e);
    }
  }

  render() {
    return(
      <div className="subject">
        {
          this.props.subjects.map((subject, index) => {
            return(
              <div
                className="subject-card"
                key={index}
              >
                <h3 onClick={this.handleClick} data-id={index}>{ subject.name }</h3>
                <p>题目数: {subject.question_amount}</p>
                <div>正确率 <Rate disabled allowHalf defaultValue={subject.rate} /></div>
              </div>
            )
          })
        }
      </div>
    )
  }
}