import axios from '@/utils/axios';

export interface IPostRest {
  author?: string
}

export interface IPost {
  [key: string]: any,
  _id?: string,
  create_at?: string,
  update_at?: string,
  //
  title: string,
  author?: string,
  content: string,
  cover?: string,
  //
  publish?: string,
  desc?: string,
  tags?: any[],
  type?: string,
  exif?: any,
  point?: string,
  relative?: string[]
}

export default class {
  static getPostList = async (page = 1, limit = 9, type = 'article', rest: IPostRest = {}) => {
    let queries = `current_page=${page}&page_size=${limit}&type=${type}`;
    if (rest.author) queries += `&author=${rest.author}`;
    return await axios.get('/posts?' + queries);
  }

  static getPostById = async (id: string) => {
    return await axios.get('/post/' + id)
  }

  static postNew = async (form: IPost) => {
    return await axios.post('/post', form);
  }

  static patchById = async (id: string, form: IPost) => {
    return await axios.put('/post/' + id, form)
  }

  static deleteById = async (id: string) => {
    return await axios.delete('/post/' + id)
  }
}