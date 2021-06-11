import React from 'react';

export const useTheme = () => {
  let theme: string = localStorage.getItem('theme') || 'light';
  return theme as string;
}