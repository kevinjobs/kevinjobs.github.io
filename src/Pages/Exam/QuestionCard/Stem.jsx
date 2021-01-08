import React from 'react';
import { Tag } from 'antd';

class Stem extends React.Component {
  transType(type) {
    if (type === 1) {
      return <span>单选题</span>
    } else if (type === 2) {
      return <span>多项题</span>
    } else if (type === 3) {
      return <span>不定项</span>
    }
  }

  render() {
    return(
      <div className="stem no-scroll-bar">
        <span>{this.props.id + 1}. </span>
        <Tag color="#87d068">
          { this.transType(this.props.type) }
        </Tag>
        <span>{this.props.stem}</span>
      </div>
    )
  }
}

export default Stem;