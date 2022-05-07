import axios from 'axios';

const http = axios.create({
  baseURL: `${process.env.REACT_APP_API}`,
});

export const Axios = (baseURL) => axios.create({ baseURL });

export default http;
