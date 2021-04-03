export type testType = {};
export default testType;

export interface UserInterface {
  username: string,
  id: string,
  avatar: string,
  role: number,
  gender: number
}

export interface IPost {
  [key: string]: any,
  id?: string,
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

export interface ImageInterface extends IPost {
  exif: {
    manufacturer: string,
    cameral_model: string,
    cameral_lens: string,
    //
    width: number,
    height: number,
    //
    exposure_time: string,
    iso: number,
    //
    latitude: string,
    latitude_ref: string,
    longitude: string,
    longitude_ref: string,
    altitude: string,
    altitude_ref: string,
    //
    address: string,
    datetime: string
  }
}
