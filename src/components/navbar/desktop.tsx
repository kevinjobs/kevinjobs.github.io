import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import multiavatar from '@multiavatar/multiavatar';
import { Button, NavbarProps } from '@/components';
import { UserInterface } from '@/types';

const DesktopNavbar: React.FC<NavbarProps> = (props) => {
  const [userInfo, setUserInfo] = React.useState<UserInterface>();

  const { fresh, onLogin, onLogout, setNightMode } = props;

  React.useEffect(() => {
    const user = localStorage.getItem('user');
    setUserInfo(JSON.parse(user!));
  }, [fresh]);

  const renderMenu = (menu: string, index: number) => {
    return (
      <li key={index}>
        <NavLink to={'/' + menu}>{menu}</NavLink>
      </li>
    )
  }

  const renderLoginButton = () => (
    <div className="DesktopNavbar--Container__Others--Login">
      <Button type="primary" onClick={onLogin}>登录</Button>
    </div>
  )

  const renderUserInfo = () => {
    const Roles: {
      [key: string]: any
    } = {
      0: '超级用户',
      1: '管理员',
      2: '还没想好',
      3: 'VIP',
      4: '普通用户'
    }

    const user = userInfo;

    if (user) {
      return (
        <div className="DesktopNavbar--Container__Others--UserInfo">
          <div className="avatar"
            dangerouslySetInnerHTML={{__html: multiavatar(user.username)}}></div>
          <div className="infos">
            <div className="item">{user.username}</div>
            <div className="item">{Roles[user.role]}</div>
            <div className="item">
              <Link to={`/profile/${user.username}`}>个人中心</Link>
            </div>
            <div className="item" onClick={onLogout}>Logout</div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="DesktopNavbar--Container__Others--UserInfo">
          <div className="avatar"><div>Null</div></div>
        </div>
      )
    }
  }

  return(
    <div className="DesktopNavbar shadow-card">
      <div className="DesktopNavbar--Container">
        <ul className="DesktopNavbar--Container__Menus">
          { props.menus?.map(renderMenu) }
        </ul>
        <div className="DesktopNavbar--Container__Others">
          <div className="DesktopNavbar--Container__Others--SearchBar"></div>
          { userInfo ? renderUserInfo() : renderLoginButton() }
          <div className="Night-Mode">
            <Button onClick={setNightMode}>Night Mode</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

DesktopNavbar.defaultProps = {
  menus: ['home', 'gallery', 'about']
}

export default DesktopNavbar;