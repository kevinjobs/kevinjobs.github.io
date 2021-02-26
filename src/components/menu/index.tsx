import React from 'react';
import classNames from 'classnames';

export interface MenuProps {
  isOpen?: boolean,
  onClick?: any,
  color?: string
}

const MenuButton: React.FC<MenuProps> = props => {
  const { isOpen, onClick, color } = props;

  const classname = classNames(
    'mint-menu-button',
    {
      'open': isOpen
    }
  )

  return (
    <div className={classname} onClick={onClick}>
      <div className="first line" style={{backgroundColor: color}}></div>
      <div className="second line" style={{backgroundColor: color}}></div>
      <div className="third line" style={{backgroundColor: color}}></div>
    </div>
  )
}

MenuButton.defaultProps = {
  color: '#555555'
}

export default MenuButton;