import axios from 'axios';

const baseURL = process.env.BASE_URL;

const reissue = async () => {
    try {
        if (!localStorage.getItem("refresh_token")) {
            alert("로그인이 필요합니다.");
            window.location.href = "/Login";
            return;
        }

        const response = await axios.patch(`${baseURL}/auth/token`, {
            refreshToken: localStorage.getItem("refresh_token"),
        });

        localStorage.setItem("access_token", response.data.accessToken);
        localStorage.setItem("refresh_token", response.data.refreshToken);
        window.location.reload();
    } catch (rej: any) {
        console.log(rej.response.data);
        if (rej.response.data.status === 404) {
            alert("일치하는 토큰을 찾을 수 없습니다.");
        } else {
            alert("토큰을 재발급하는 동안 오류가 발생했습니다.");
        }
    }
}
/*
if (!localStorage.getItem("refresh_token")) {
        alert("로그인이 필요합니다.");
        window.location.href = "/Login";
    }
    return await axios.post(`${baseURL}/auth/token`, {
        refreshToken: localStorage.getItem("refresh_token"),
    }).then((response) => {
        localStorage.setItem("access_token", response.data.accessToken);
        localStorage.setItem("refresh_token", response.data.refreshToken);
        window.location.reload();
    }).catch((rejects) => {
        console.log(rejects.response.data);
        if (rejects.response.data.status === 404) {
            alert("일치하는 토큰을 찾을 수 없습니다.");
        }
    })
*/

export default reissue;