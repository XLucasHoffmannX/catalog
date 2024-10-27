import axios from 'axios';
import Cookies from 'js-cookie';

import { env } from '@/app/config';

export const HttpClient = axios.create({
  baseURL: env.VITE_APP_URL_ROOT
});

export const HttpClientAuth = axios.create({
  baseURL: env.VITE_APP_URL_ROOT
});

HttpClientAuth.interceptors.request.use(config => {
  config.headers.authorization = Cookies.get('access-client');
  return config;
});

HttpClientAuth.interceptors.response.use(
  res => {
    return res;
  },
  error => {
    if (error.response) {
      if (error.response.status === 401 || error.response.status === 403) {
        Cookies.remove('access-client', {
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
