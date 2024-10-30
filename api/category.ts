import { IFilter } from "@/interfaces";
import axios from "axios";
const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const getListCategory = async (query: IFilter) => {
  const page = query.page ? query.page : 0;
  const limit = query.limit ? query.limit : null;
  const search = query.search ? query.search : null;
  try {
    const res = await axios.get(
      `${API_URL}/api/client/categories?page=${page}&limit=${limit}&name=${search}`
    );
    const total = res.headers && res.headers["x-total-count"];
    return {
      categories: res.data,
      total,
    };
  } catch (e) {
    return null;
  }
};
