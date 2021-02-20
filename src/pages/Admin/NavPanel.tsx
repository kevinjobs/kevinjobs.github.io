import React from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
  menus?: string[]
}

const NavPanel: React.FC<Props> = (props: Props) => {
  return (
    <div className="Admin-NavPanel">
      <div className="Admin-NavPanel__Header">
        <h2>Admin Panel</h2>
      </div>
      <div className="Admin-NavPanel__Container">
        <div className="Admin-NavPanel__Container--Menus">
          <ul>
            <li><NavLink to={'/admin/article'}>Articles</NavLink></li>
            <li><NavLink to={'/admin/gallery'}>Gallery</NavLink></li>
            <li><NavLink to={'/admin/tags'}>Tags</NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavPanel;