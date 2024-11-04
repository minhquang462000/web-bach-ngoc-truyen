
export interface ILayout {
  children: React.ReactNode;
}
export interface PropParams  {
  params: Promise<{ slug: string,id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}
export interface IFilter {
  search: string;
  tag: string;
  page: number;
  limit: number;
  category: string;
  views: number;
  author: string;
  status: number;
  contributor: string;
}
export interface ICategory {
  _id: string;
  name: string;
  description: string;
  status: number;
  created_at: string;
  updated_at: string;
}
export interface IAuthor {
  _id: string;
  name: string;
  status: number;
  description: string;
  created_at: string;
  updated_at: string;
}
export interface ITag {
  _id: string;
  name: string;
  status: number;
  description: string;
  created_at: string;
  updated_at: string;
}

export interface IUser {
  _id: string;
  name: string;
  email: string;
  avatar: string;
  status: number;
  gender: number;
  address: string;
  phone: string;
  created_at: string;
  updated_at: string;
}
export interface IBook {
  _id: string;
  name: string;
  status: number;
  created_at: string;
  updated_at: string;
  categories: ICategory[];
  authors: IAuthor[];
  images: string[];
  tags: ITag[];
  banner: string;
  description: string;
  view: number;
  nominate: IUser;
  contributor: string;
}
export interface IChapter {
  _id: string;
  name: string;
  chapterNumber: number;
  created_at: string;
  views: number;
  images: String[];
  updated_at: string;
  book: string;
  content: string;
}
