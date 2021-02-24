import React from 'react';
import { InputProps } from './index';

const Input: React.FC<InputProps> = props => {
  const { label, ...restProps } = props;
  return (
    <div className="mint-input">
      <label>{ label }</label>
      <input {...restProps} />
    </div>
  )
}

export default Input;