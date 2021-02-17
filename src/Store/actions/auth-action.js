import { AUTH } from '../types.js';
import { login } from '../../Apis/auth';

export const toLogin = loginForm => dispatch => {
  login(loginForm).then(res => {
    let currentUser = {};
    if (res.status === 200) {
      const token = res.data.data.token;
      // const id = res.data.data.id;
      // const username = res.data.data.username;
      localStorage.setItem('token', token);
      // localStorage.setItem('id', id);
      // localStorage.setItem('username', username);
      currentUser = {
        isLogin: true,
        // id: id,
        // username: username,
        token: token
      }
      // console.log(currentUser);
      dispatch(setCurrentUser(currentUser))
    };
  }).catch(e => {
    dispatch({
      type: AUTH.GET_ERRORS,
      payload: e
    })
  })
}

export function setCurrentUser(currentUser) {
  return {
    type: AUTH.SET_CURRENT_USER,
    payload: currentUser
  }
}

export function toLogout() {
  localStorage.clear();
  const currentUser = {
    isLogin: false
  }
  return {
    type: AUTH.CLEAR_CURRENT_USER,
    payload: currentUser
  }
}