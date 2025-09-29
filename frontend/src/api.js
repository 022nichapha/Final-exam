import axios from "axios";

const api = axios.create({
  baseURL: "https://bookshop-api-er7t.onrender.com/api",
});

export default api;
