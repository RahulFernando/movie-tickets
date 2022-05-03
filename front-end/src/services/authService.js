import http from "../config/httpHelper";

const httpRequest = {
    loginUser: (data) => http.post('/users/sign-in', data)
}

export default httpRequest;