import axios from 'axios';

export const Http = axios.create({
  baseURL: import.meta.env.VITE_API_CLIENT
});

Http.interceptors.response.use(
  res => {
    return res;
  },
  error => {
    if (error.response) {
      if (error.response.status === 401 || error.response.status === 403) {
        return window.location.replace('/not-access');
      }

      return error;
    }
  }
);
