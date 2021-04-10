import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import multiavatar from '@multiavatar/multiavatar';
import { Button, NavbarProps, Switch, Icon, Dropdown } from '@/components';
import { UserInterface } from '@/types';
import classNames from 'classnames';
import { useTheme } from '@/hooks';

const DesktopNavbar: React.FC<NavbarProps> = (props) => {
  const [userInfo, setUserInfo] = React.useState<UserInterface>();
  const [menuItemShow, setMenuItemShow] = React.useState(false);

  const { fresh, onLogin, onLogout, onSwitchTheme, menus } = props;

  React.useEffect(() => {
    const user = localStorage.getItem('user');
    setUserInfo(JSON.parse(user!));
  }, [fresh]);

  const renderLoginButton = () => (
    <div className="DesktopNavbar--Container__Others--Login">
      <Button type="primary" onClick={onLogin}>登录</Button>
    </div>
  )

  const renderMenus = () => {
    return (
      <div className="DesktopNavbar--Container__Menus">
        <div className="menu-item">
          <span className="title">
            <Link to="/">Mint Forge</Link>
          </span>
        </div>
        <div className="menu-item">
          <span className="title">
            <Link to="/schedule">待办事项</Link>
          </span>
        </div>
        <div className="menu-item"
          onMouseEnter={e => setMenuItemShow(true)}
          onMouseLeave={e => setMenuItemShow(false)}
        >
          <Dropdown title="探索更多">
            <>
              <div className="more-item">
                <Link to="/wiki">百科</Link>
              </div>
              <div className="more-item">
                <Link to="/home">文章</Link>
              </div>
              <div className="more-item">
                <Link to="/gallery">相册</Link>
              </div>
              <div className="divider"></div>
              <div className="more-item">
                <Link to="/admin">管理</Link>
              </div>
            </>
          </Dropdown>
        </div>
      </div>
    )
  }

  const renderIcon = (username: string) => (
    <div
      className="avatar"
      dangerouslySetInnerHTML={{
        __html: multiavatar(username)
    }}></div>
  )

  const renderUserInfo = () => {
    const user = userInfo;

    if (user) {
      return (
        <div className="DesktopNavbar--Container__Others--UserInfo">
          <Dropdown title={renderIcon(user.username)}>
            <div className="item">{user.username}</div>
            <div className="item">{user.role}</div>
            <div className="item">
              <Link to={`/profile/${user.username}`}>个人中心</Link>
            </div>
            <div className="item" onClick={onLogout}>Logout</div>
          </Dropdown>
        </div>
      )
    }
  }

  const { theme } = useTheme();
  const classname = classNames(
    'DesktopNavbar',
    {
      [`theme-${theme}`]: theme
    }
  )

  return(
    <div className={classname}>
      <div className="DesktopNavbar--Container">
        { renderMenus() }
        <div className="DesktopNavbar--Container__Others">
          <div className="DesktopNavbar--Container__Others--SearchBar"></div>
          { userInfo ? renderUserInfo() : renderLoginButton() }
          <Switch color="#000" onSwitch={onSwitchTheme} />
        </div>
      </div>
    </div>
  )
}

DesktopNavbar.defaultProps = {
  menus: ['home', 'gallery', 'about']
}

export default DesktopNavbar;