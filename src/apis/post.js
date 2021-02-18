import axios from '@/utils/axios';

export async function getPostList(page=1, limit=9, type=0, val) {
  let resp = await axios({
    method: 'get',
    url: `/posts?current_page=${page}&page_size=${limit}&type=${type}`
  }, val)
  return resp
}

export async function getPostById (id, val) {
  let resp = await axios({
    method: 'get',
    url: `/post/${id}`
  }, val)
  return resp
}