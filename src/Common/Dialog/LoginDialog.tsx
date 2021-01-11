import React, { useState } from 'react';
import { Button, Input } from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';

interface LoginDialogType {
  onClick?: any,
  onSubmit?: any,
  onCancel?: any,
  username?: string,
  password?: string,
  isShow?: boolean
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
  
  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { onSubmit } = props;
    if (onSubmit) {
      (onSubmit as React.MouseEventHandler<HTMLButtonElement>)(e);
    }
  }

  const onCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { onCancel } = props;
    if (onCancel) {
      (onCancel as React.MouseEventHandler<HTMLButtonElement>)(e);
    }
  }

  return(
    <div className={isShow ? 'login-dialog card appear' : 'login-dialog card dispear'}>
      <div className="login-dialog-container">
        <h2 style={{color:'#fff'}}>登录界面</h2>
        <Input
          value={username}
          onChange={handleUsernameChange}
          prefix={<UserOutlined />}
          placeholder="please input username"
        />
        <Input.Password
          value={password}
          onChange={handlePasswordChange}
          prefix={<LockOutlined />}
          placeholder="please input password"
        />
        <Button onClick={onSubmit} type="primary">Submit</Button><br />
        <Button onClick={onCancel}>Cancel</Button>
      </div>
    </div>
  )
}

export default LoginDialog;