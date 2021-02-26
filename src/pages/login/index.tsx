import React from 'react';
import { useHistory } from 'react-router-dom';
import classNames from 'classnames';
import { Button, Divider, Input, message } from '@/components';
import { toLogin } from '@/apis/auth';
import { storeTokenAndUser, removeTokenAndUser } from '@/utils/user';
import { useViewport, breakpoint } from '@/hooks/viewportCtx';

export interface LoginPageProps {};

const LoginPage: React.FC<LoginPageProps> = props => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isLogined, setIsLogined] = React.useState(false);

  const history = useHistory();
  const { width } = useViewport();

  const onSubmit = (e: any) => {
    e.preventDefault();
    toLogin({username, password}).then(res => {
      if (res.status === 200 && res.data.code === 1) {
        message({text: '登录成功', type: 'success'});
        const { token, user } = res.data.data;
        storeTokenAndUser(token, user);
        setIsLogined(true);
        setTimeout(() => history.goBack(), 500);
      } else {
        message({type: 'danger', text: '登录失败'});
      }
    }).catch((err: any) => console.log(err));
  }

  const onCancel = (e: any) => {
    message({text: '正在返回原网页'});
    setTimeout(() => history.goBack(), 1000);
  }

  const handleChange = (e: any) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (name === 'username') setUsername(value);
    else if (name === 'password') setPassword(value);
  }

  React.useEffect(() => {
    const token = localStorage.getItem('token');
    token ? setIsLogined(true) : setIsLogined(false);
  }, [isLogined]);

  const classname = classNames('Login', {
    'Mobile': width < breakpoint
  })

  const renderLogined = (
    <>
      <p>您已登录</p>
      <Button type="primary" onClick={e => {
        removeTokenAndUser();
        setIsLogined(false);
      }}>退出登录</Button>
    </>
  )

  const renderLoginPanel = (
    <>
      <div className="header">
        <h3>登 录 界 面</h3>
      </div>
      <div className="input">
        <form>
          <Input
            onChange={handleChange}
            placeholder="请输入用户名"
            autoComplete="on"
            value={username}
            name='username' />
          <Input
            onChange={handleChange}
            placeholder="请输入密码"
            autoComplete="on"
            value={password}
            name='password'
            type='password' />
        </form>
      </div>
      <div className="handle">
        <Button onClick={onSubmit} type='primary' onKeyDown={onSubmit}>Submit</Button>
        <Button onClick={onCancel}>Cancel</Button>
      </div>
      <div className="other-methods">
        <Divider><small>选择其他登录方式</small></Divider>
        <div className="methods">
          <span>微信</span>
          <span>Github</span>
          <span>微博</span>
        </div>
      </div>
    </>
  )

  return (
    <div className={classname}>
      <div className="Login-Container">
        <div className="panel shadow-card">
          { isLogined ? renderLogined : renderLoginPanel }
        </div>
      </div>
    </div>
  )
}

export default LoginPage;