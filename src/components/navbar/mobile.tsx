import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import multiavatar from '@multiavatar/multiavatar';
import { Menu, Transition } from '@/components';

interface Props {
  menus?: string[]
}

const MobileNavbar: React.FC<Props> = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userInfo, setUserInfo] = useState<{username: string}>();

  const { menus } = props;
  const history = useHistory();

  React.useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setUserInfo(JSON.parse(user));
    }
  }, [])

  const handleClick = (e: any, menu: string) => {
    e.preventDefault();
    setIsMenuOpen(!isMenuOpen);
    history.push(`/${menu}`);
  }

  const renderMenu = (menu: string, index: number) => {
    return (
      <li key={index}>
        <NavLink to={`/${menu}`} onClick={e => handleClick(e, menu)}>
          {menu.toUpperCase()}
        </NavLink>
      </li>
    )
  }

  const renderUserIcon = (user: {username: string}) => (
    <div className="avatar-svg"
      dangerouslySetInnerHTML={{__html: multiavatar(user.username)}}></div>
  )

  return (
    <div className="mint-navbar-mobile">
      <div className="container">
        <div className="button">
          <Menu
            onClick={(e: any) => setIsMenuOpen(!isMenuOpen)}
            isOpen={isMenuOpen} />
        </div>
        <div className="avatar">
          { userInfo ? renderUserIcon(userInfo) : <span></span> }
        </div>
      </div>
      <Transition
        in={isMenuOpen}
        timeout={700}
        animation="ExpandShrink"
      >
        <div className="menu-list">
          <ul>{ menus?.map(renderMenu) }</ul>
        </div>
      </Transition>
    </div>
  )
}

MobileNavbar.defaultProps = {
  menus: ['home', 'gallery', 'about']
}

export default MobileNavbar;