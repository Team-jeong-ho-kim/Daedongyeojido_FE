import axios from 'axios';

const baseURL = process.env.BASE_URL;

const CreateClub = async (clubName: String) => {
    await axios.post(`${baseURL}/admin-club/create`, clubName)
    .catch((rejects) => {
        console.log(rejects.response);
        if (rejects.response.status === 403) {
            alert("동아리를 생성할 권한이 없습니다.");
        }
        if (rejects.response.status === 409) {
            alert("같은 동아리가 이미 존재합니다.");
        }
    });
};

export default CreateClub;