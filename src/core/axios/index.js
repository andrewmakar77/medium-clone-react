import axios from 'axios';
import { API_URL } from 'constants/api';

const token = localStorage.getItem('auth-token');

export const httpClient = axios.create({
  baseURL: API_URL,
  headers: {
    authorization: token ? `Token ${token}` : ''
  }
});