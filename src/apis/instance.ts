import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { getCookie } from '../utiles/UseCookies';

const BASE_URL = process.env.REACT_APP_SERVER_URL;

export const baseInstance = (
  options: AxiosRequestConfig = {},
): AxiosInstance => {
  return axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
    ...options,
  });
};

// 토큰 값 포함
export const authInstance = (
  options: AxiosRequestConfig = {},
): AxiosInstance => {
  const TOKEN = getCookie('access-token');
  // const TOKEN = process.env.REACT_APP_REFRESH_TOKEN;
  return axios.create({
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
    withCredentials: true,
    ...options,
  });
};
