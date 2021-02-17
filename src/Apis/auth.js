import axios from '../Utils/axios';

export async function login(form, val) {
  // console.log(form);
  let resp = await axios({
    method: 'post',
    url: '/login',
    data: form
  }, val)
  return resp
}