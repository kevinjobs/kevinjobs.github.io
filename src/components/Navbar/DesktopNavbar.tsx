import './style.scss';
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import LoginDialog from '@/components/Dialog/LoginDialog';
import multiavatar from '@multiavatar/multiavatar';
import Button from '@/components/Button';

interface Props {
  menus?: string[]
}

interface UserInterface {
  username: string,
  id: string,
  avatar: string,
  role: number,
  gender: number
}

const DesktopNavbar: React.FC<Props> = (props: Props) => {
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

  const showLoginButton = () => {
    return (
      <Button
        type="primary"
        onClick={(e: any) => setShowDialog(!showDialog)}
      >登录</Button>
    )
  }

  const showUserInfo = (user: UserInterface) => {
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
            localStorage.clear();
            setUserInfo(undefined);
          }}>Logout</div>
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
          { userInfo ? showUserInfo(userInfo) : showLoginButton() }
        </div>
      </div>
      <LoginDialog isShow={showDialog}
        onSubmit={(e: any) => setShowDialog(false)}
        onCancel={(e: any) => setShowDialog(false)} />
    </div>
  )
}

DesktopNavbar.defaultProps = {
  menus: ['Home', 'Gallery', 'About']
}

export default DesktopNavbar;