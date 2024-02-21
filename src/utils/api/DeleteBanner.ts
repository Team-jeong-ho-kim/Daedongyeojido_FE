import axios from 'axios';

const baseURL = process.env.BASE_URL;

const DeleteBanner = async (bannerId: String) => {
    await axios.delete(`${baseURL}/main/banner/${bannerId}`);
};

export default DeleteBanner;