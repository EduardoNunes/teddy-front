import axios from "axios";

const api = axios.create({
  baseURL: "https://teddy-back.onrender.com",
  timeout: 100000,
  headers: { "Content-Type": "application/json" },
});

export default api;
//http://localhost:3000
