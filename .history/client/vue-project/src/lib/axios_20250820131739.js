import Axios from "axios";

const axios = Axcios.create({
  baseURL: "http;//localhost:8000",
  timeout: 60000,
  withCredentials: true,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  headers: {
    accept: "application/json",
  },
});

axios.interceptors.response.use(null, (err) => {
  console.log(err);
});

export default axios;
