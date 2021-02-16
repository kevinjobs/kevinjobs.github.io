import React from 'react';
import './style.scss';

interface Props {
  children: React.ReactNode
}

class Divider extends React.Component<Props, any> {
  render() {
    return(
      <div className="divider">
        <span className="divider-line"></span>
        <span className="divider-text">{this.props.children}</span>
        <span className="divider-line"></span>
      </div>
    )
  }
}

export default Divider;