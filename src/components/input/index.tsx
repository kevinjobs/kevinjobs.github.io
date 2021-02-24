import React from 'react';
import Input from './input';

export type InputProps = {
  label?: string
} & React.InputHTMLAttributes<any>; 

export default Input;