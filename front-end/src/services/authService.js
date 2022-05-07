import { Axios } from '../config/httpHelper';

const httpRequest = {
  loginUser: (data) =>
    Axios('http://localhost:5000/api/v1').post(
      '/users/sign-in',
      data
    ),
};

export default httpRequest;
