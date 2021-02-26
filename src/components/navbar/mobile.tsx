import React, { useState } from 'react';
import { Menu } from '@/components';
import { NavLink } from 'react-router-dom';
import multiavatar from '@multiavatar/multiavatar';
import { Transition } from '@/components';

interface Props {
  menus?: string[]
}

const MobileNavbar: React.FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [delayOpen, setDelayOpen] = useState(true);
  const [userInfo, setUserInfo] = useState<{username: string}>();

  const openMenu = (e: any) => {
    e.preventDefault();
    setOpen(!open);
    delayOpen ? setTimeout(() => {setDelayOpen(false)}, 100) : setDelayOpen(true);
  }

  const showUserInfo = (user: {username: string} | undefined) => {
    if (user) {
      return (
        <div className="avatar"
          dangerouslySetInnerHTML={{__html: multiavatar(user.username)}}></div>
      )
    } else {
      return <div className="avatar"></div>
    }
  }

  React.useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setUserInfo(JSON.parse(user));
    }
  }, [])

  return(
    <div className={open ? 'mobile-navbar open' : 'mobile-navbar'}>
      <div className="menu">
        <div className="menu-button">
          <Menu onClick={openMenu} show={open} />
        </div>
        <div className="menu-logo">
          <span>Mint Forge</span>
        </div>
        <div className="menu-avatar">
          {  showUserInfo(userInfo) }
        </div>
      </div>

      <div className="menu-list fade-in" style={{display: delayOpen ? 'none' : ''}}>
        <ul>
          {
            props.menus?.map((menu, index) => {
              return (
                <li key={index}>
                  <NavLink to={`/${menu}`}>
                    {menu.toUpperCase()}
                  </NavLink>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

MobileNavbar.defaultProps = {
  menus: ['Home', 'Gallery', 'About']
}

export default MobileNavbar;