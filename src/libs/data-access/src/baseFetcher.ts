import axios, { AxiosRequestConfig } from "axios";

export const baseFetcher = (path: string, config?: AxiosRequestConfig) => {
  try {
    if (!process.env.REACT_APP_SPLEND_SERVICE) {
      throw new Error(
        "REACT_APP_SPLEND_SERVICE environment variable is not set"
      );
    }

    const get = async (data?: any) =>
      await axios.get(`${process.env.REACT_APP_SPLEND_SERVICE}${path}`, {
        withCredentials: true,
        headers: { "Access-Control-Allow-Origin": "*" },
        ...config,
      });

    const post = async (data?: any) =>
      await axios.post(`${process.env.REACT_APP_SPLEND_SERVICE}${path}`, data, {
        withCredentials: true,
        headers: { "Access-Control-Allow-Origin": "*" },
        ...config,
      });

    const put = async (data?: any) =>
      await axios.put(`${process.env.REACT_APP_SPLEND_SERVICE}${path}`, data, {
        withCredentials: true,
        headers: { "Access-Control-Allow-Origin": "*" },
        ...config,
      });

    const del = async () =>
      await axios.delete(`${process.env.REACT_APP_SPLEND_SERVICE}${path}`, {
        withCredentials: true,
        headers: { "Access-Control-Allow-Origin": "*" },
        ...config,
      });

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
