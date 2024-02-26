import axios from "axios";
import { refresh } from "./refresh";

export const instance = axios.create({
  baseURL: "https://prod-server.xquare.app/jung-ho",
  timeout: 3000,
});

instance.interceptors.request.use(
  (res) => {
    const token = localStorage.getItem("access_token");
    if (token) res.headers.Authorization = `Bearer ${token}`;
    return res;
  },
  (err) => {
    alert("오류가 발생했습니다");
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    const { config } = err;

    const token = localStorage.getItem("refresh_token");
    if (
      (err.response?.status === 401 || err.response?.status === 403) &&
      token
    ) {
      refresh(token)
        .then((res) => {
          localStorage.setItem("access_token", res.data.accessToken);
          config.headers.Authorization = `Bearer ${res.data.accessToken}`;
          return axios(config);
        })
        .catch(() => {});
    } else {
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      localStorage.removeItem("part");
      window.location.href = "/";
      console.log(err);
    }
  }
);
