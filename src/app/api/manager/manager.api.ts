import axios from 'axios';
import Cookies from 'js-cookie';

import { env } from '@/app/config';

console.log(env.VITE_APP_URL_ROOT);

export const HttpManager = axios.create({
  baseURL: env.VITE_APP_URL_ROOT
});

export const HttpManagerAuth = axios.create({
  baseURL: env.VITE_APP_URL_ROOT
});

HttpManagerAuth.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${Cookies.get('access-token')}`;
  return config;
});

HttpManagerAuth.interceptors.response.use(
  res => {
    return res;
  },
  error => {
    if (error.response) {
      if (error.response.status === 401 || error.response.status === 403) {
        Cookies.remove('access-token', {
          path: '/',
          domain:
            import.meta.env.ENV === 'production'
              ? import.meta.env.COOKIE_DOMAIN
              : import.meta.env.COOKIE_LOCAL
        });

        return window.location.replace('/');
      }

      return error;
    }
  }
);
