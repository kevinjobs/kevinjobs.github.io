import axios from '@/utils/axios';

export interface ITodo {
  // 基础字段 - 时间
  // create_at: Date,
  // update_at: Date,
  _id: string,
  title: string,
  status: string, // 'todo', 'done', 'delete'
  date?: string,
  done?: string,
  level?: number, // 3, 2, 1
  desc?: string
}

export default class {
  static getList = async () => {
    return await axios.get('/todos');
  }

  static putById = async (id: string, form: any) => {
    return await axios.put(`/todo?id=${id}`, form);
  }
}