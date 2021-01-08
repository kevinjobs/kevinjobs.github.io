import React from 'react';
import store from '../../Store';

import { UserType } from '../../Pages/Types';
import MyMenu from './common/Menu';
import Logout from './common/Logout';
import Login from './common/Login';
// import Search from './Search';

import './style.scss';

interface Props {
  menus: string[]
}

interface State extends UserType {
  mask?: boolean
}

class DesktopNavbar extends React.Component<Props, State> {
  state: State = {
    isLogin: false,
    id: -1,
    username: ''
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        isLogin: store.getState().auth.isLogin,
        id: store.getState().auth.id,
        username: store.getState().auth.username
      })
    });
  }

  render() {
    return(
      <div className="desktop-navbar">
        <div className="desktop-navbar-container">
          <MyMenu menus={this.props.menus} />
          { this.state.isLogin ? <Logout user={this.state} /> : <Login key={Math.random()*10} /> }
        </div>
      </div>
    )
  }
}

export default DesktopNavbar;