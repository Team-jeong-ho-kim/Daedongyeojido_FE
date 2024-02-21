import axios from 'axios';

const baseURL = process.env.BASE_URL;

const AddBanner = async (url: String) => {
    await axios.post(`${baseURL}/main/banner`, url);
};

export default AddBanner;