import axios from "axios";
const service = axios.create({
  baseURL: "http://localhost:3000/api",
  timeout: 6000,
});
service.interceptors.response.use((res) => {
  if (res.status === 200) {
    return res.data;
  }
});
export default service;
