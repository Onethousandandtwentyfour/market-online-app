import axios from "axios";

const baseConfig = {
  baseURL: "http://123.207.32.32:8000",
  timeout: 20000
};
export default function request(params) {
  const instance = axios.create(baseConfig);
  instance.interceptors.request.use(
    config => {
      return config;
    },
    reason => {
      return Promise.reject(reason);
    }
  );
  instance.interceptors.response.use(
    res => {
      return (200 == res.status && res.data.data) || Promise.reject(res);
    },
    reason => {
      return Promise.reject(reason);
    }
  );

  return instance(params);
}
