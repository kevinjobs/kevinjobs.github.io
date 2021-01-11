import React from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
  menus: string[];
}

const MyMenu: React.FC<Props> = (props) => {
  return(
    <ul className="menu">
      {
        props.menus.map((menu, index) => {
          return(
            <li key={index}>
              <NavLink to={menu}>
                {menu}
              </NavLink>
            </li>
          )
        })
      }
    </ul>
  )
}

export default MyMenu;