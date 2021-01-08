import axios from '../Utils/axios.js';

export async function getImages(page=1, limit=9, val) {
  let resp = await axios({
    method: 'get',
    url: `/images?page=${page}&limit=${limit}`
  }, val)
  return resp
}