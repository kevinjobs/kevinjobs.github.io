import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// const initialState = {}
// const middleware = [thunk]

// 异步 action 需要使用 中间件
const store = createStore(
  rootReducer,
  // initialState,
  applyMiddleware(thunk)
);

export default store;