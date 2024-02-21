import axios from 'axios';

const baseURL = process.env.BASE_URL;

const MyPage = async () => {
    await axios.post(`${baseURL}/user/my-info`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
    })
    .then((response) => {
        return response.data;
    }).catch((rejects) => {
        console.log(rejects.response);
        if (rejects.response.status === 404) {
            alert("일치하는 유저 정보를 찾을 수 없습니다.")
        }
    });
};

export default MyPage;