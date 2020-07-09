import axios from 'axios';

axios.defaults.baseURL = "https://localhost:8081/";
// axios.defaults.withCredentials = true;
// axios.useCredentails = true;
// axios.interceptors.request.use(
//     config => {
//         config.headers.common['Authorization'] = 'bearer ' + localStorage.getItem('accessToken');
//         config.withCredentials = true;
//         return config;
//     },
//     error => {
//         return Promise.reject(error);
//     }
// );