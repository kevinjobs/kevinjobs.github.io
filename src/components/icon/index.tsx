import React from 'react';
import classNames from 'classnames';
import { IconProp, library } from '@fortawesome/fontawesome-svg-core';
import {
  FontAwesomeIcon,
  FontAwesomeIconProps
} from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

export type ThemeProps =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark'

export interface IconProps extends FontAwesomeIconProps {
  icon: IconProp,
  theme?: ThemeProps
}

export const Icon: React.FC<IconProps> = (props) => {
  const {
    className,
    theme,
    ...restProps
  } = props;

  const classes = classNames(
    'mint-icon',
    className,
    {
      [`icon-${theme}`]: theme
    }
  )

  return (
    <FontAwesomeIcon className={classes} {...restProps} />
  )
}

Icon.defaultProps = { theme: 'primary' }

export default Icon;