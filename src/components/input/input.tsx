import React from 'react';
import styled from 'styled-components';
import { Search } from '@icon-park/react';
import { InputProps } from './index';
import ColorMap from '@/styles/color';

const Input: React.FC<InputProps> = props => {
  const {
    label,
    search,
    value,
    onChange,
    ...restProps
  } = props;

  const MintInput = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    label {
      display: inline-block;
      text-align: justify;
      text-align-last: justify;
    }
    input {
      padding: 8px 10px;
      border: 1px solid #d9d9d9;
      &:hover {
        border: 1px solid ${ColorMap['primary']};
      }
      &:focus {
        border: 1px solid transparent;
        outline: 1px solid ${ColorMap['primary']};
      }
    }
    span {
      position: absolute;
      height: 24px;
      display: inline-block;
      right: 4px;
    }
  `;

  return (
    <MintInput>
      <label>{ label }</label>
      <input value={value} onChange={onChange} {...restProps} />
      {
        search &&
        <Search
          theme="outline"
          size="24"
          fill="#333"
          strokeWidth={2}
        />
      }
    </MintInput>
  )
}

export default Input;