import './style.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';
import LoginDialog from '@/components/Dialog/LoginDialog';

interface Props {
  menus?: string[]
}

interface UserInterface {
  username: string,
  id: string,
  avatar: string
}

const DesktopNavbar: React.FC<Props> = (props: Props) => {
  const [user, setUser] = React.useState<UserInterface>();
  const [showDialog, setShowDialog] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {}, []);

  const showMenus = (menu: string, index: number) => {
    return (
      <li key={index}>
        <NavLink to={menu}>{menu}</NavLink>
      </li>
    )
  }

  const showLoginButton = () => {
    return (
      <div
        className="DesktopNavbar--Container__Others--Login"
        onClick={(e: any) => setShowDialog(!showDialog)}
      >
        <span>登录</span>
      </div>
    )
  }

  const showUserInfo = (user: UserInterface) => {
    return (
      <div className="DesktopNavbar--Container__Others--UserInfo">
        <div className="avatar"></div>
        <div className="infos">
          <div className="item">{user.id || '001'}</div>
          <div className="item">Logout</div>
          <div className="item">Logout</div>
          <div className="item">Logout</div>
          <div className="item">Logout</div>
          <div className="item">Logout</div>
        </div>
      </div>
    )
  }

  return(
    <div className="DesktopNavbar">
      <div className="DesktopNavbar--Container">
        <ul className="DesktopNavbar--Container__Menus">
          { props.menus?.map(showMenus) }
        </ul>
        <div className="DesktopNavbar--Container__Others">
          <div className="DesktopNavbar--Container__Others--SearchBar"></div>
          { user ? showUserInfo(user) : showLoginButton() }
        </div>
      </div>
      <LoginDialog isShow={showDialog} onCancel={(e: any) => setShowDialog(false)} />
    </div>
  )
}

DesktopNavbar.defaultProps = {
  menus: ['Home', 'Gallery', 'About']
}

export default DesktopNavbar;