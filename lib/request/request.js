import axios from "axios";
const service = axios.create({
  baseURL: "https://nextjs-blog-ecgh.vercel.app/api",
  timeout: 6000,
});
service.interceptors.response.use((res) => {
  if (res.status === 200) {
    return res.data;
  }
});
export default service;
