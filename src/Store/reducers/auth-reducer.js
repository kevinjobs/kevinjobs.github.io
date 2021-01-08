import { AUTH } from '../types.js';

const initialState = {
  isLogin: false,
  id: '',
  username: '',
  token: ''
}

export default function authReducer(state=initialState, action) {
  switch (action.type) {
    case AUTH.SET_CURRENT_USER:
      return action.payload;
    case AUTH.CLEAR_CURRENT_USER:
      return action.payload;
    default:
      return state;
  }
}