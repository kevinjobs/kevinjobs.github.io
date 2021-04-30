import React from 'react';
import { Omit, tuple } from '../_utils/type';
import classNames from 'classnames';

const ButtonTypes = tuple(
  'default',
  'primary',
  'danger',
  'warning',
  'success',
  'dark',
  'light'
);
export type ButtonType = typeof ButtonTypes[number];

export interface BaseButtonProps {
  type?: ButtonType,
  children?: React.ReactNode,
  size?: 'small' | 'large' | 'medium',
  shape?: 'square' | 'round'
}

export type NativeButtonProps = {
  onClick?: React.MouseEventHandler<any>;
} & BaseButtonProps & Omit<React.ButtonHTMLAttributes<any>, 'type' | 'onClick'>;

export type ButtonProps = Partial<NativeButtonProps>;

const B: React.FC<ButtonProps> = props => {
  const { type, size, shape, onClick, children, ...rest } = props;

  const classnames = classNames({
    'mint-button': true,
    [`mint-button-${type}`]: type,
    [`mint-button-${size}`]: size,
    [`mint-button-${shape}`]: shape
  })

  return (
    <button className={classnames} onClick={onClick} {...rest}>{children}</button>
  )
}

export default B;