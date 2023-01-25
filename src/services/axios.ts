import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { history } from './history';

const addAuthToken = (config: AxiosRequestConfig) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers = {
      Authorization: token,
    };
  }
  return config;
};

export const removeAuthToken = (error: AxiosError) => {
  if (error?.response?.status === 401) {
    localStorage.remove('token');
    if (
      !history.location.pathname.includes('login') ||
      !history.location.pathname.includes('register')
    ) {
      history.push('/login');
    }
  }
  return Promise.reject(error);
};

export const instance = axios.create({
  baseURL: 'http://localhost:5000/api',
});

instance.interceptors.request.use(addAuthToken);

instance.interceptors.response.use(undefined, removeAuthToken);
