import axios from '@/utils/axios';

export interface IPath {
  // create_at: Date,
  // update_at: Date,
  _id?: string,
  pathname: string, // e.g. posts
  allowMethods?: string[], // post | get | put | delete
  authRequiredMethods?: string[], // post | get | put | delete
  allowRoles?: string[] // super | admin | vip | common
}

export default class {
  static getList = async () => {
    let resp = await axios.get(`/paths`)
    return resp;
  }

  static postNewPath = async (form: IPath) => {
    let resp = await axios.post('/path', form);
    return resp;
  }

  static putById = async (id: string, form: IPath) => {
    let queries = `?id=${id}`;
    const resp = await axios.put(`/path${queries}`, form);
    return resp;
  }

  static deleteById = async (id: string) => {
    let queries = `?id=${id}`;
    const resp = await axios.delete(`/path${queries}`);
    return resp;
  }
}