import './style.scss';
import React, { useState } from 'react';
import classNames from 'classnames';
import { toLogin } from '@/apis/auth';

interface LoginDialogType {
  onSubmit?: any,
  onCancel?: any,
  username?: string,
  password?: string,
  isShow: boolean | undefined
}

const LoginDialog: React.FC<LoginDialogType> = (props: LoginDialogType) => {
  const { isShow } = props;

  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setUsername(e.target.value);
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPassword(e.target.value);
  }
  
  const onSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const resp = await toLogin({username: username, password: password});
    if (resp.status === 200) {
      const user = resp.data.data.user;
      const token = resp.data.data.token;
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', token);
    }
    const { onSubmit } = props;
    if (onSubmit) {
      (onSubmit as React.MouseEventHandler<HTMLElement>)(e);
    }
  }

  const onCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { onCancel } = props;
    if (onCancel) {
      (onCancel as React.MouseEventHandler<HTMLButtonElement>)(e);
    }
  }

  const classnames = classNames({
    "LoginDialog": true,
    "appear": isShow,
    "dispear": isShow === undefined ? false : (isShow ? false : true)
  });

  return (
    <div className={classnames} style={{display: isShow === undefined ? 'none' : 'block'}}>
      <div className="LoginDialog__Container">
        <h2 style={{color:'#fff'}}>登录界面</h2>
        <input
          value={username}
          onChange={handleUsernameChange}
          placeholder="please input username"
        ></input>
        <input
          value={password}
          onChange={handlePasswordChange}
          placeholder="please input password"
          type="password"
        ></input>
        <button onClick={onSubmit}>Submit</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  )
}

export default LoginDialog;