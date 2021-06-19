import React from 'react';
import Input from './input';

export type InputProps = {
  label?: string,
  search?: boolean,
  value?: string,
  onChange?: React.ChangeEventHandler<any>
} & Omit<React.InputHTMLAttributes<any>, 'value' | 'onChange'>; 

export default Input;