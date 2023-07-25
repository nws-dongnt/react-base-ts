import axios from "axios";

const client = axios.create({
  baseURL: "https://reqres.in/api",
  timeout: 30000,
});

client.interceptors.request.use(
  (config) => {
    const token = "<your token here>";
    if (token) {
      // eslint-disable-next-line no-param-reassign
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

client.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response.status === 401) {
      // handler your logic here
    }

    if (err.response.status === 403) {
      // handler your logic here
    }

    if (err.response.status === 404) {
      // handler your logic here
    }
    return Promise.reject(err);
  },
);

export default client;
