import axios from 'axios';

const baseURL = process.env.BASE_URL;

const DeleteClub = async (clubName: String) => {
    await axios.delete(`${baseURL}/admin-club/delete/${clubName}`)
    .catch((rejects) => {
        console.log(rejects.response);
        if (rejects.response.status === 403) {
            alert("동아리를 삭제할 권한이 없습니다.");
        }
        if (rejects.response.status === 404) {
            alert("일치하는 동아리 정보를 찾을 수 없습니다.")
        }
    });
};

export default DeleteClub;