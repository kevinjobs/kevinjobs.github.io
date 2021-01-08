import React from 'react';
import Stem from './Stem';
import Answer from './Answer';
import Spent from './Spent';
import Order from './Order';
import { CloseOutlined } from '@ant-design/icons';
import { QuestionType } from '../../Types';

interface Props {
  question: QuestionType,
  onClose?: React.MouseEventHandler<HTMLDivElement>,
  onSelect?: any
}

export default class Question extends React.Component<Props, any> {
  render() {
    const question = this.props.question;

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
      const { onClose } = this.props;
      if (onClose) {
        (onClose as React.MouseEventHandler<HTMLDivElement>)(e);
      }
    }

    return(
      <div className="question-card fade-in">
        <div className="close" onClick={handleClick}>
          <CloseOutlined style={{fontSize:'inherit'}} />
        </div>
        <div className="left">
          <Stem stem={question.stem} id={question.id} type={question.type} />
          <Answer answers={question.answers} />
        </div>
        <div className="right">
          <Spent meta={question.spent} />
          <Order total={question.total} onSelect={this.props.onSelect} />
        </div>
      </div>
    )
  }
}