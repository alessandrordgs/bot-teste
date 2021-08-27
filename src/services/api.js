import axios from "axios";

const api = axios.create({
  baseURL: "https://61252fcd3c91fb0017e729c2.mockapi.io/api/v1/",
});

export default api;
// https://61252fcd3c91fb0017e729c2.mockapi.io/api/v1/user com o endpoint users!!