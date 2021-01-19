interface QuestionType {
  id: number,
  type: number,
  spent: number[],
  right_times: number,
  stem: string,
  answers: string[],
  total: number
}

interface ArticleType {
  cover: string,
  title: string,
  author: string,
  content: string,
  create_time: string,
  update_time: string,
  tags: string,
  category: string
}

interface ImageType {
  [key: string]: string | number,
  create_time: string,
  update_time: string,
  //
  title: string,
  author: string,
  source: string,
  desc: string,
  //
  tags: string,
  category: string,
  //
  manufacturer: string,
  system_version: string,
  cameral_model: string,
  cameral_lens: string,
  //
  width: number,
  length: number,
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
  position: string
}

interface SectionType {
  id: number,
  name: string,
  rate: number,
  chapter_amount: number,
  section_amount: number,
  question_amount: number
}

interface ChapterType extends SectionType {
  sections?: SectionType[]
}

interface SubjectType  extends SectionType {
  chapters?: ChapterType[]
}

interface LoginformType {
  username: string,
  password: string,
  avatar?: string
}

interface UserType {
  isLogin: boolean,
  id: number,
  username: string,
  token?: string,
  password?: string
}

export type {
  ArticleType,
  QuestionType,
  SubjectType,
  LoginformType,
  UserType,
  ImageType
};