import { combineReducers } from 'redux';
import maskReducer from './mask-reducer';
import regReducer from './reg-reducer';
import authReducer from './auth-reducer';

const allReducers = {
  mask: maskReducer,
  reg: regReducer,
  auth: authReducer
}

const rootReducer = combineReducers(allReducers);

export default rootReducer;