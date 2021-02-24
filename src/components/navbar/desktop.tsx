import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import multiavatar from '@multiavatar/multiavatar';
import { Button, message, NavbarProps } from '@/components';
import { UserInterface } from '@/types';

const DesktopNavbar: React.FC<NavbarProps> = (props) => {
  const [userInfo, setUserInfo] = React.useState<UserInterface>();
  const [showDialog, setShowDialog] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    const user = localStorage.getItem('user');
    setUserInfo(JSON.parse(user!));
  }, [localStorage.getItem('user')]);

  const showMenus = (menu: string, index: number) => {
    return (
      <li key={index}>
        <NavLink to={'/' + menu}>{menu}</NavLink>
      </li>
    )
  }

  const renderLoginButton = () => (
    <Button
      type="primary"
      onClick={e => window.location.href = '#/login'}
    >登录</Button>
  )

  const renderUserInfo = (user: UserInterface) => {
    const Roles: {
      [key: string]: any
    } = {
      0: '超级用户',
      1: '管理员',
      2: '还没想好',
      3: 'VIP',
      4: '普通用户'
    }
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
          <div className="item" onClick={(e: any) => {
            message({ type: 'success', text: '退出登录' });
            setTimeout(() => {
              message({ type: 'info', text: `再见 ${userInfo?.username}`})
            }, 1000);
            setUserInfo(undefined);
            localStorage.removeItem('token');
            localStorage.removeItem('user');
          }}>Logout</div>
        </div>
      </div>
    )
  }

  return(
    <div className="DesktopNavbar shadow-card">
      <div className="DesktopNavbar--Container">
        <ul className="DesktopNavbar--Container__Menus">
          { props.menus?.map(showMenus) }
        </ul>
        <div className="DesktopNavbar--Container__Others">
          <div className="DesktopNavbar--Container__Others--SearchBar"></div>
          { userInfo ? renderUserInfo(userInfo) : renderLoginButton() }
        </div>
      </div>
    </div>
  )
}

DesktopNavbar.defaultProps = {
  menus: ['Home', 'Gallery', 'About']
}

export default DesktopNavbar;