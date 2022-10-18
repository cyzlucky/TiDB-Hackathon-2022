import { serverHost, serverPort } from "@/libs/host";
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import { Responses } from "@/types/api/common";
import { printLog } from "@/api/responseIntercept";

const request = axios.create({
  baseURL: serverHost() + serverPort(),
  timeout: 1000,
});

// if (window.token !== null && window.token !== undefined) {
//   request.defaults.headers.common['Authorization'] = window.token;
// }

request.interceptors.request.use((config: AxiosRequestConfig) => {
  return config;
}, (error) => {
  console.log("[interceptors.request.error]", error);
  return Promise.reject(error);
});

type Cache = {
  [uri: string]: any,
}

const cache: Cache = {};
const cacheUrl: string[] = [];

request.interceptors.response.use((response: AxiosResponse<Responses<any>>) => {
  printLog(response);
  if (response.data.code === 200 && response.config?.url && cacheUrl.concat(response.config?.url)) {
    cache[response.config.url] = response;
  }
  return response;
}, (error: AxiosError) => {
  const reg = RegExp(/timeout/);
  if (reg.test(error?.message)) {
    if (error.config?.url && cacheUrl.concat(error.config?.url) && cache[error.config?.url]) {
      return Promise.resolve(cache[error.config?.url]);
    }
  }

  console.log("[Response.error]: ", error);
  return Promise.reject(error);
});

export {
  request,
};
