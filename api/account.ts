import axios from "axios";
const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const getAccount = async (id: string) => {
    try {
      const res = await axios.get(`${API_URL}/api/v1/users/${id}`);
      return res.data;
    } catch (e) {
      return null;
    }
  };