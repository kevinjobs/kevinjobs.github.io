import { Types } from '../types.js';

export function showReg() {
  return {
    type: Types.show
  }
}

export function hideReg() {
  return {
    type: Types.hide
  }
}