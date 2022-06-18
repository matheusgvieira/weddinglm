import axios from "axios";

const api = axios.create({
  baseURL: "https://3x1nppu0n6.execute-api.us-east-1.amazonaws.com",
});

export default api;
