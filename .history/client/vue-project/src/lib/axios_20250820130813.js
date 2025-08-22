import Axios from "axios";

const axios = Axcios.create({
  baseURL: "http;//localhost:8000",
  timeout: 60000,
  withCredentials: true,
});

export default axios;
