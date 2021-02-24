import { UserInterface } from '../types';

export const storeTokenAndUser = (token: string, user: UserInterface) => {
  const userJson = JSON.stringify(user);
  localStorage.setItem('token', token);
  localStorage.setItem('user', userJson);
}

export const removeTokenAndUser = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
}