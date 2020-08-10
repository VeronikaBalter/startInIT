import axios from 'axios';
import store from '@/store/index';

axios.defaults.baseURL = "http://localhost:5428/";
axios.interceptors.request.use(
    config => {
        config.headers.common['x-access-token']  = store.getters['authorization/token'];
        config.withCredentials = true;
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);