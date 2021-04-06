import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://www.mocky.io/v2/',
});

const onGamePost = async (moves) => {
    return axiosInstance.post('5df38f523100006d00b58560', moves);
};

export {
    onGamePost,
};
