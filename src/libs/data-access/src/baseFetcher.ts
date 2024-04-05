import axios, { AxiosRequestConfig } from "axios";

export const baseFetcher = (path: string, config?: AxiosRequestConfig) => {
  try {
    if (!process.env.REACT_APP_SPLEND_SERVICE) {
      throw new Error(
        "REACT_APP_SPLEND_SERVICE environment variable is not set"
      );
    }

    const get = () =>
      axios
        .get(`${process.env.REACT_APP_SPLEND_SERVICE}${path}`, {
          withCredentials: true,
          headers: { "Access-Control-Allow-Origin": "*" },
          ...config,
        })
        .then((res) => res.data);

    const post = (data?: any) =>
      axios
        .post(`${process.env.REACT_APP_SPLEND_SERVICE}${path}`, data, {
          withCredentials: true,
          headers: { "Access-Control-Allow-Origin": "*" },
          ...config,
        })
        .then((res) => res.data);

    const put = (data?: any) =>
      axios
        .put(`${process.env.REACT_APP_SPLEND_SERVICE}${path}`, data, {
          withCredentials: true,
          headers: { "Access-Control-Allow-Origin": "*" },
          ...config,
        })
        .then((res) => res.data);

    const del = () =>
      axios
        .delete(`${process.env.REACT_APP_SPLEND_SERVICE}${path}`, {
          withCredentials: true,
          headers: { "Access-Control-Allow-Origin": "*" },
          ...config,
        })
        .then((res) => res.data);

    return {
      get,
      post,
      put,
      del,
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
};
