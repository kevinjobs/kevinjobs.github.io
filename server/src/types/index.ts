import { IRoute } from './route';

interface IConfig {
  token: {
    secret: string,
    expiresIn: number | string, // token expired time
  },
  log: {
    path: string,
  }
}

type MyDate = Date | number | string;

interface IBase {
  createAt?: Date | number | string,
  updateAt?: Date | number | string,
  id?: number,
  uid?: string,
}

interface IPost extends IBase {
  createAt: Date,
  updateAt: Date,
  id: number,
  uid: string,
  //
  title: string,
  author: string,
  publish: string,
  tags: string,
}

interface IArticle extends IPost {
  cover: string,
  content: string,
  extension: string,
  excerpt: string,
}

interface IPicture extends IPost {
  source: string,
  description: string,
  width: number,
  height: number,
  latitude: number,
  longitude: number,
  latitudeRef: string,
  longitudeRef: string,
}

interface ILog {
  id?: number,
  uid?: string,
  /**
   * date & time the log was created
   */
  datetime: number | string,
  /**
   * ip address
   */
  ip: string,
  /**
   * the method of request
   */
  method: string,
  /**
   * path[url] of request
   */
  url: string,
  /**
   * http[s] status code
   */
  status: number,
  /**
   * time spent per request
   */
  spent: string,
  /**
   * 
   */
  message: string,
  /**
   * 
   */
  length: string,
}

export interface IInvitation extends IBase {
  code: string,
  available?: true,
}

export interface IUser extends IBase {
  name: string,
  password: string,
  role: 0 | 1 | 2 | 3,
  invitation?: string,
}

export interface IProperty extends IBase {
  platform: string;
  totalAmount: number;
  currency: string;
  children: {
    project: string;
    amount: number;
  }[] | string;
}

export {
  IConfig,
  IBase,
  IPost,
  IArticle,
  IPicture,
  ILog,
  //
  IRoute,
}