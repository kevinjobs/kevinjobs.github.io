import axios from '@/utils/axios';

export interface ITag {
  // 基础字段 - 时间
  // create_at: Date,
  // update_at: Date,
  _id: string,
  name: string,
  desc: string,
  amount: number
}

export default class {
  static getList = async () => {
    return await axios.get('/tags');
  }

  static postNew = async (form: ITag) => {
    return await axios.post('/tag', form);
  }

  static getById = async (id: string) => {
    return await axios.get(`/tag?id=${id}`);
  }
}