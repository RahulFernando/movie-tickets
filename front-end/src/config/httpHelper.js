import axios from 'axios';

const http = axios.create({
  baseURL: `${process.env.REACT_APP_API}/api/v1`,
});

export default http;
