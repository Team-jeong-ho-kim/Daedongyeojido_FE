import axios from 'axios';

const baseURL = process.env.BASE_URL;

const UsersAllInquiry = async () => {
    await axios.get(`${baseURL}/user/all`)
    .then((response) => {
        return response.data;
    });
};

export default UsersAllInquiry;