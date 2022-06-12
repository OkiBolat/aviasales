import axios from 'axios';

const instance = axios.create({
  baseURL: `https://627e7af6271f386ceff90b8a.mockapi.io/tickets`,
});

export default instance;