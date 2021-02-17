import React, { useState } from 'react';

import { toLogin } from '../../Store/actions/auth-action';
import store from '../../Store';

interface LoginDialogType {
  onClick?: any,
  // onSubmit?: any,
  onCancel?: any,
  username?: string,
  password?: string,
  isShow: boolean
}

const LoginDialog: React.FC<LoginDialogType> = (props: LoginDialogType) => {
  const { isShow } = props;

  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [show, setShow] = useState(false);
  const [hide, setHide] = useState(true);

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setUsername(e.target.value);
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPassword(e.target.value);
  }
  
  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const loginForm = {
      'username': username,
      'password': password
    }
    store.dispatch(toLogin(loginForm));
    setShow(false);
  }

  const onCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { onCancel } = props;
    if (onCancel) {
      (onCancel as React.MouseEventHandler<HTMLButtonElement>)(e);
    }
  }

  if (isShow) {
    setTimeout(() => {
      setHide(false);
    }, 100);
  }

  React.useEffect(() => {
    if (!show && !isShow) {
      setShow(true);
    } else {
      setShow(isShow);
    }
  }, [isShow, show]);

  return(
    <div
      className={show ? 'login-dialog card appear' : 'login-dialog card dispear'}
      style={{display: hide ? 'none' : ''}}
    >
      <div className="login-dialog-container">
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
        ></input>
        <button onClick={onSubmit}>Submit</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  )
}

export default LoginDialog;