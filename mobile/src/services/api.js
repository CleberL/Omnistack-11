import axios from "axios";

const api = axios.create({
  baseURL: "http://12.38.110.106:3333"
});

export default api;
