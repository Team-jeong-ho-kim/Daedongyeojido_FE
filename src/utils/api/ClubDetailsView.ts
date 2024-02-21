import axios from 'axios';

const baseURL = process.env.BASE_URL;

const ClubDetailsView = async (clubName: String) => {
    await axios.get(`${baseURL}/club/info/${clubName}`).then((response) => {
        return response.data;
    }).catch((rejects) => {
        console.log(rejects.response);
        if (rejects.response.status === 404) {
            alert("일치하는 동아리 정보를 찾을 수 없습니다.")
        }
    });
};

export default ClubDetailsView;