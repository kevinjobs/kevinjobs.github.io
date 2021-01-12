import React from 'react';
import LoginDialog from './LoginDialog';

import './style.scss';

interface LoginDialogType {
  onClick?: any,
  onSubmit?: any,
  onCancel?: any,
  username?: string,
  password?: string,
  isShow?: boolean
}

const Dialog: React.FC<LoginDialogType> = (props: LoginDialogType) => {
  return(
    <LoginDialog
      isShow={props.isShow}
      onClick={props.onClick}
      onSubmit={props.onSubmit}
      onCancel={props.onCancel}
      username={props.username}
      password={props.password}
    />
  )
}

export default Dialog;