import axios from '@/utils/axios';

export interface IUser {
  // create_at: Date,
  // update_at: Date,
  _id?: string,
  username: string,
  password?: string,
  // 基础字段 - 额外信息
  nickname?: string,
  avatar?: string,
  homepage?: string,
  birthday?: Date,
  gender?: string, // 'male' | 'female' | 'unknown'
  location?: string,
  motto?: string,
  desc?: string,
  role?: string // 'admin' | 'super' | 'vip' | 'common'
}

export default class {
  static getList = async () => {
    let resp = await axios.get(`/users`)
    return resp;
  }

  static postNewUser = async (form: IUser) => {
    let resp = await axios.post('/user', form);
    return resp;
  }

  static putById = async (id: string, form: IUser) => {
    let queries = `?id=${id}`;
    const resp = await axios.put(`/user${queries}`, form);
    return resp;
  }

  static deleteById = async (id: string) => {
    let queries = `?id=${id}`;
    const resp = await axios.delete(`/user${queries}`);
    return resp;
  }
}