import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchBar from '../../../Components/SearchBar';
import multiavatar from '@multiavatar/multiavatar';

import './style.scss';

interface Props {
  menus: string[],
  onLogin?: any
}

const DesktopNavbar: React.FC<Props> = (props: Props) => {
  const [currentUser, setCurrentUser] = React.useState('');

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { onLogin } = props;
    if (onLogin) {
      (onLogin as React.MouseEventHandler<HTMLButtonElement>)(e);
    }
  }

  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) setCurrentUser('callmedaddy');
  }, []);

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
          {
            currentUser
            ? 
            <div className="DesktopNavbar-UserInfo">
              <div className="DesktopNavbar-UserInfo__Avatar"
                dangerouslySetInnerHTML={{__html: multiavatar(currentUser)}}>
              </div>
              <div className="DesktopNavbar-UserInfo__Menu">
                <p>Admin</p>
                <p>Female</p>
                <p>id: 18</p>
                <p>Logout</p>
              </div>
            </div>
            :
            <span className="login-button"><button onClick={handleClick}>Login</button></span>
          }
        </div>
      </div>
    </div>
  )
}

export default DesktopNavbar;