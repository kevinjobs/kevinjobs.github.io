import React from 'react';
import { Link } from 'react-router-dom';
import multiavatar from '@multiavatar/multiavatar';
import { Button, NavbarProps, Switch, Dropdown } from '@/components';
import { UserInterface } from '@/types';
import classNames from 'classnames';
import { useTheme, useChangeTheme } from '@/hooks';

const DesktopNavbar: React.FC<NavbarProps> = (props) => {
  const theme = useTheme();
  const change = useChangeTheme();

  const [userInfo, setUserInfo] = React.useState<UserInterface>();

  const { fresh, onLogin, onLogout } = props;

  const handleSwitchTheme = (e: any) => {
    if (theme === 'dark') change('light');
    else if (theme === 'light') change('dark');
  }

  const renderLoginButton = () => (
    <div className="login">
      <Button type="primary" onClick={onLogin}>登录</Button>
    </div>
  )

  React.useEffect(() => {
    const user = localStorage.getItem('user');
    if (user && user !== 'undenfied') {
      setUserInfo(JSON.parse(user))
    };
  }, [fresh]);

  const renderMenus = () => {
    return (
      <div className="menus">
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
        <div className="menu-item">
          <span className="title">
            <Link to="/about">组件</Link>
          </span>
        </div>
        <div className="menu-item">
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
        <div className="user-info">
          <Dropdown title={renderIcon(user.username)}>
            <>
              <div className="more-item">{user.username}</div>
              <div className="more-item">{user.role}</div>
              <div className="more-item">
                <Link to={`/profile/${user.username}`}>个人中心</Link>
              </div>
              <div className="more-item" onClick={onLogout}>Logout</div>
            </>
          </Dropdown>
        </div>
      )
    }
  }

  const classname = classNames(
    'navbar desktop',
    `${theme}`
  )

  return(
    <div className={classname}>
      <div className="container">
        { renderMenus() }
        <div className="others">
          <div className="search-bar"></div>
          { userInfo ? renderUserInfo() : renderLoginButton() }
          <Switch onClick={handleSwitchTheme} />
        </div>
      </div>
    </div>
  )
}

DesktopNavbar.defaultProps = {
  menus: ['home', 'gallery', 'about']
}

export default DesktopNavbar;