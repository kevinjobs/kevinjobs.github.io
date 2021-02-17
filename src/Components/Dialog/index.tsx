import React from 'react';

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
  return <></>
}

export default Dialog;