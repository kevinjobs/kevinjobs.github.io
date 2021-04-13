import React from 'react';
import { Omit, tuple } from '../_utils/type';
import classNames from 'classnames';

const ButtonTypes = tuple('default', 'primary', 'danger', 'warning', 'success');
export type ButtonType = typeof ButtonTypes[number];

export interface BaseButtonProps {
  type?: ButtonType,
  children?: React.ReactNode,
  size?: 'small' | 'large' | 'medium'
}

export type NativeButtonProps = {
  onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps & Omit<React.ButtonHTMLAttributes<any>, 'type' | 'onClick'>;

export type ButtonProps = Partial<NativeButtonProps>;

const B: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { type, children, size, ...rest } = props;

  const classnames = classNames({
    'mint-button': true,
    [`mint-button-${type}`]: type,
    [`mint-button-${size}`]: size
  })

  return (
    <button className={classnames} {...rest}>{children}</button>
  )
}

export default B;