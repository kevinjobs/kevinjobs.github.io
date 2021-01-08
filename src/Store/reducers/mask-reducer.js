import { Types } from '../types.js';

export default function maskReducer(state=false, action) {
  switch (action.type) {
    case Types.show:
      return true
    case Types.hide:
      return false
    default:
      return false
  }
}