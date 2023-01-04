import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { history } from './history';

const addAuthToken = (config: AxiosRequestConfig) => {
  const token = localStorage.get('');
  if (token) {
    config.headers = {
      Authorization: token,
    };
  }
  return config;
};

const removeAuthToken = (error: AxiosResponse) => {
  if ((error as unknown as AxiosError).response?.status === 401) {
    localStorage.remove('');
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
  baseURL: 'http://localhost:5000',
});

instance.interceptors.request.use(addAuthToken);
instance.interceptors.response.use(removeAuthToken);
