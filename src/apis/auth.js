import axios from '@/utils/axios';
import { queries } from '@testing-library/react';

export async function toLogin (form, val) {
  const resp = await axios({
    method: 'post',
    url: '/login',
    data: form
  }, val)
  return resp;
}

export async function getUser (query, val) {
  const { id, username } = query;
  let queries = '';
  if (id) queries += '&id=' + String(id);
  if (username) queries += '&username=' + String(username);
  const resp = await axios({
    method: 'get',
    url: `/user?${queries}`
  }, val);
  return resp; 
}