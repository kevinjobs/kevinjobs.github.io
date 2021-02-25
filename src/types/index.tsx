export type testType = {};
export default testType;

export interface UserInterface {
  username: string,
  id: string,
  avatar: string,
  role: number,
  gender: number
}

export interface ImageInterface {
  [key: string]: string | number | object,
  id: string,
  create_at: string,
  update_at: string,
  //
  title: string,
  author: string,
  cover: string,
  publish: 0 | 1 | 2 | 3,
  desc: string,
  tags: any[],
  type: 0 | 1,
  //
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
