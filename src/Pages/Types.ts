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
  author: string,
  category: string,
  create_time: string,
  desc: string,
  device: string,
  id: string,
  location: string,
  source: string,
  tags: string,
  title: string,
  update_time: string
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