import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jackie-s-burger-default-rtdb.firebaseio.com/'
});

export default instance;