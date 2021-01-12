import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchBar from '../../../Components/SearchBar';

import './style.scss';

interface Props {
  menus: string[],
  onLogin?: any
}

const DesktopNavbar: React.FC<Props> = (props: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { onLogin } = props;
    if (onLogin) {
      (onLogin as React.MouseEventHandler<HTMLButtonElement>)(e);
    }
  }
  return(
    <div className="desktop-navbar">
      <div className="desktop-navbar-container">
        <ul className="left">
        {
          props.menus.map((menu, index) => {
            return <li key={index}><NavLink to={menu}>{menu}</NavLink></li>
          })
        }
        </ul>
        <div className="right">
          <SearchBar />
          <span className="login-button"><button onClick={handleClick}>Login</button></span>
        </div>
      </div>
    </div>
  )
}

export default DesktopNavbar;