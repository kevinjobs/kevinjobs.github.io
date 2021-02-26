import React from 'react';
import { Omit } from '@/components/_utils/type';
import classNames from 'classnames';

export type ImageProps = {
  className: string,
  style?: React.CSSProperties,
  onError?: any,
  onLoad?: string
} & Omit<React.ImgHTMLAttributes<any>, 'className' | 'style' | 'onError' | 'onLoad'>;

const Image: React.FC<ImageProps> = props => {
  const { className, style, src, onError, onLoad, ...restProps } = props

  const classname = classNames(
    'mint-image',
    'shadow-card',
    className
  )

  const beforeLoaded: string = 'http://inews.gtimg.com/newsapp_ls/0/13215742764/0';

  const handleOnError = (e: any) => {
    e.target.src = 'http://inews.gtimg.com/newsapp_ls/0/13215710182/0';
  }

  const handleOnLoad = (e: any) => {
    e.target.src = src;
  }

  return (
    <div className={classname} style={style}>
      <img
        {...restProps}
        src={onLoad ? onLoad : beforeLoaded}
        onError={handleOnError}
        onLoad={handleOnLoad} />
    </div>
  )
}

export default Image;