import React from 'react';
import classNames from 'classnames';
import RcImage, { ImageProps } from 'rc-image';

export type { ImageProps };

const Image: React.FC<ImageProps> = props => {
  const { prefixCls, preview = false, fallback, ...restProps} = props

  const classname = classNames(
    'mint-image',
    prefixCls
  )

  return (
    <RcImage
      prefixCls={classname}
      fallback='http://inews.gtimg.com/newsapp_ls/0/13215710182/0'
      preview={preview}
      {...restProps}
    />
  )
}

export default Image;