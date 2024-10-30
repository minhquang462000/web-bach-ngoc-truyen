import { IFilter } from "@/interfaces";
import axios from "axios";
import { cookies } from "next/headers";
const API_URL = process.env.NEXT_PUBLIC_API_URL;
export async function getListBooksNoTotal(query: IFilter) {
  const page = query.page ? query.page : 1;
  const limit = query.limit ? query.limit : 10;
  const search = query.search ? query.search : "";
  const tags = query.tag ? query.tag : "";
  const category = query.category ? query.category : "";
  const author = query.author ? query.author : "";
  const views = query.views ? query.views : 0;
  const contributor = query.contributor ? query.contributor : "";
  ///---> Params
  const params: any = {
    page,
    limit,
    name: search,
    tags,
    categories: category,
    authors: author,
    views,
    contributor,
  };
  const keys = Object.keys(params) as (keyof IFilter)[];
  keys.forEach((key) => {
    if (
      params[key] === "" ||
      (Array.isArray(params[key]) && params[key].length === 0)
    ) {
      delete params[key];
    }
  });
  const cookie = await cookies();
  const token = cookie.get("token")?.value;
  try {
    const res = await axios.get(`${API_URL}/api/client/books`, {
      params,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data
  } catch (e) {
    return null;
  }
}
export const getOneBook = async (id: string) => {
  const cookie = await cookies();
  const token = cookie.get("token")?.value;
  try {
    const res = await axios.get(`${API_URL}/api/client/books/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (e) {
    return null;
  }
};
