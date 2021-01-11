import React, { useState } from 'react';
import './style.scss';
import MenuButton from '../MenuButton';
import { NavLink } from 'react-router-dom';

interface Props {
  menus: string[]
}

const MobileNavbar: React.FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [delayOpen, setDelayOpen] = useState(true);

  const openMenu = (e: any) => {
    e.preventDefault();
    // console.log('menus');
    open ? setOpen(false) : setOpen(true);
    delayOpen ? setTimeout(() => {setDelayOpen(false)}, 100) : setDelayOpen(true);
  }

  return(
    <div className={open ? 'mobile-navbar open' : 'mobile-navbar'}>
      <div className="menu">
        <div className="menu-logo">
          <span>Mint Forge</span>
        </div>
        <div className="menu-button">
          <MenuButton onClick={openMenu} show={open} />
        </div>
      </div>
      <div className="menu-list fade-in" style={{display: delayOpen ? 'none' : ''}}>
        <ul>
          {
            props.menus.map((menu, index) => {
              return <li key={index}><NavLink to={menu}>{menu.toUpperCase()}</NavLink></li>
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default MobileNavbar;