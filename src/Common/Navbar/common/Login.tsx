import React from 'react';
import { Button, Input, message } from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import store from '../../../Store';
import { toLogin } from '../../../Store/actions/auth-action.js';

interface State {
  username: string,
  password: string,
  fastMask: boolean,
  delayMask: boolean
}

class Login extends React.Component<any, State> {
  state: State = {
    username: '',
    password: '',
    fastMask: false,
    delayMask: true
  }

  handleUsernameChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    this.setState({username: value});
    // console.log(value);
  }

  handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    // this.setState({password: e.target.value})
    const value = e.target.value;
    this.setState({password: value})
  }

  submit() {
    let form = {
      username: this.state.username,
      password: this.state.password
    }
    // console.log(form);
    store.dispatch(toLogin(form));
    message.loading('正在登录....');
    this.setState({fastMask: false});
    setTimeout(() => this.setState({delayMask: true}), 499);
  }

  cancel(e: any) {
    // console.log(e);
    e.preventDefault();
    if (this.state.fastMask) {
      this.setState({fastMask: false});
      setTimeout(() => this.setState({delayMask: true}), 499);
    } else {
      this.setState({fastMask: true});
      this.setState({delayMask: false})
    }
  }

  mask() {
    if (this.state.delayMask) {
      return 'none'
    } else {
      return ''
    }
  }

  handleWheel = (e: any) => {
    e.preventDefault()
  }

  componentDidUpdate() {
    if (!this.state.fastMask) {
      document.getElementById('root')?.removeEventListener('wheel', this.handleWheel);
    } else {
      document.getElementById('root')?.addEventListener('wheel', this.handleWheel);
    }
  }

  render() {
    return(
      <div className="login">
        <Button className="login-button" onClick={this.cancel.bind(this)}>Login/Register</Button>

        <div
          className={this.state.fastMask ? 'login-dialog card appear' : 'login-dialog out card dispear'}
          style={{display: this.mask()}}
        >
          <div className="login-dialog-mask">
            <h2 style={{color:'#fff'}}>登录界面</h2>
            <Input
              value={this.state.username}
              onChange={this.handleUsernameChange.bind(this)}
              prefix={<UserOutlined />}
              placeholder="please input username"
            />
            <Input.Password
              value={this.state.password}
              onChange={this.handlePasswordChange.bind(this)}
              prefix={<LockOutlined />}
              placeholder="please input password"
            />
            <Button onClick={this.submit.bind(this)} type="primary">Submit</Button><br />
            <Button onClick={this.cancel.bind(this)}>Cancel</Button>
          </div>
        </div>
        
        <div
          className={this.state.fastMask ? 'mask fade-in' : 'mask fade-out'}
          style={{display: this.mask()}}
        ></div>
      </div>
    )
  }
}

export default Login;