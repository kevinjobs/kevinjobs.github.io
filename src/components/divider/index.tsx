import * as React from 'react';

export type DividerProps = {} & React.HTMLAttributes<any>;

const Divider: React.FC<DividerProps> = (props) => {
  const { children, ...rest } = props;

  return (
    <div className="mint-divider" {...rest}>
      <span className="mint-divider-left mint-divider-line"></span>
      <span
        className="mint-divider-center"
        style={{display: children ? 'inline-block' : 'none'}}>
        { children }
      </span>
      <span className="mint-divider-right mint-divider-line"></span>
    </div>
  )
}

export default Divider;