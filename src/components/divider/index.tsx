import React from 'react';

export interface DividerProps {};

const Divider: React.FC<DividerProps> = (props) => {
  return (
    <div className="mint-divider">
      <span className="mint-divider-left mint-divider-line"></span>
      <span className="mint-divider-center">
        { props.children }
      </span>
      <span className="mint-divider-right mint-divider-line"></span>
    </div>
  )
}

export default Divider;