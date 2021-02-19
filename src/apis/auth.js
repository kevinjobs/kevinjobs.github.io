import axios from '@/utils/axios';

export async function toLogin (form, val) {
  const resp = await axios({
    method: 'post',
    url: '/login',
    data: form
  }, val)
  return resp;
}