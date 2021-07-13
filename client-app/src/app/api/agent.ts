import axios, { AxiosResponse } from 'axios';

axios.defaults.baseURL = 'http://localhost:5000/api';

const responBody = (response : AxiosResponse) => response.data;

const requests = {
    get: (url: string) => axios.get().then(responBody);
    post: (url: string) => axios.post().then(responBody);
    put: (url: string) => axios.put().then(responBody);
    del: (url: string) => axios.delete().then(responBody);
}