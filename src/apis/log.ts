import axios from '@/utils/axios';

export interface ILog {}

export default class {
  static getList = async () => {
    return await axios.get('/logs');
  }

  static getByFileName = async (filename: string) => {
    return await axios.get('/log?filename=' + filename);
  }
}