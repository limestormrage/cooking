import axios from 'axios';
import { TApi } from './interface';

const API_KEY = process.env.REACT_APP_API_KEY;

const REQUEST_TIMEOUT = 5000;

const API_URL = `https://www.themealdb.com/api/json/v1/${API_KEY}`;

export const createAPI = (): TApi => {
  const api = axios.create({
    baseURL: API_URL,
    timeout: REQUEST_TIMEOUT,
  });

  return api;
};
