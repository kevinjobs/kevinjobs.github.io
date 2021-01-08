import React from 'react';
import './style.scss';

interface Props {
  children: React.ReactNode
}

class Divider extends React.Component<Props, any> {
  render() {
    return(
      <div className="divider">
        <div className="divider-line"></div>
        <p className="divider-text">{this.props.children}</p>
        <div className="divider-line"></div>
      </div>
    )
  }
}

export default Divider;