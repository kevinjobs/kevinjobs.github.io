import axios from '@/utils/axios';

export async function getPostList(page=1, limit=9, type='article', rest = {}, val) {
  let queries = `current_page=${page}&page_size=${limit}&type=${type}`;

  if (rest.author) queries += `&author=${rest.author}`;

  let resp = await axios({
    method: 'get',
    url: `/posts?` + queries
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

export async function postNew (form, val) {
  let resp = await axios({
    method: 'post',
    url: '/post',
    data: form
  }, val)
  return resp;
}

export async function patchById (id, form, val) {
  let resp = await axios({
    method: 'patch',
    url: `/post/${id}`,
    data: form
  }, val)
  return resp;
}

export async function deleteById (id, val) {
  let resp = await axios({
    method: 'delete',
    url: `/post/${id}`
  }, val)
  return resp;
}