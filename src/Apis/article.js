import axios from '../Utils/axios.js';

export async function getArticles(page=1, limit=9, val) {
  let resp = await axios({
    method: 'get',
    url: `/articles?page=${page}&limit=${limit}`
  }, val)
  return resp
}