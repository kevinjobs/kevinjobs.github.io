import { Types } from '../types.js';

export function showMask() {
  return {
    type: Types.show
  }
}

export function hiddeMask() {
  return {
    type: Types.hide
  }
}