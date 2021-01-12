import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchBar from '../../../Components/SearchBar';

import './style.scss';

interface Props {
  menus: string[]
}

const DesktopNavbar: React.FC<Props> = (props: Props) => {
  return(
    <div className="desktop-navbar">
      <div className="desktop-navbar-container">
        <ul className="left">
        {
          props.menus.map((menu, index) => {
            return <li key={index}><NavLink to={menu}>{menu.toUpperCase()}</NavLink></li>
          })
        }
        </ul>
        <div className="right"><SearchBar /></div>
      </div>
    </div>
  )
}

export default DesktopNavbar;