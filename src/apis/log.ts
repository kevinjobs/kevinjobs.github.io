import axios from '@/utils/axios';

export interface ILog {}

export default class {
  static getList = async (date: string) => {
    return await axios.get(`/logs?date=${date}`);
  }

  static getByFileName = async (filename: string) => {
    return await axios.get('/log?filename=' + filename);
  }
}