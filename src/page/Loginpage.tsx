import styled from "styled-components";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import LoginInput from "../components/LoginInput";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Loginpage = () => {
  const [alarmVisible, setAlarmVisible_] = useState(false);
  const [classNumber, setClassNumber] = useState("");
  const [name, setName] = useState("");
  const [part, setPart] = useState("");
  const [xquareId, setXquareId] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});
  const [toMain, setToMain] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
    }
  }, []);

  const fetchData = async () => {
    try {
      const userResponse = await axios.get(
        `https://prod-server.xquare.app/users/account-id/${xquareId}`
      );

      const { grade, class_num, num, user_role } = userResponse.data;
      const classNum = `${grade}${class_num}${num}`;
      const userRole = user_role === "STU" ? "INDEPENDENT" : "TEACHER";

      const requestData = {
        xquareId: userResponse.data.account_id,
        classNumber: classNum,
        name: userResponse.data.name,
        part: userRole,
        password,
      };

      const response = await axios.post(
        "https://prod-server.xquare.app/jung-ho/auth/login",
        requestData
      );

      const accessToken = response.data.access_token;

      localStorage.setItem("access_token", accessToken);

      setUserData(response.data);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleLogin = async () => {
    fetchData();
  };
            
  if (toMain) {
    navigate("/");
  }
  return (
    <Container>
      <Header
        setAlarmVisible={setAlarmVisible_}
      />
      <LoginWrapper>
        <TextWrapper>
          <Welcome>대동여지도에 오신 걸 환영합니다!</Welcome>
          <LoginText>로그인 후 더 많은 기능을 사용해보세요 :&#41;</LoginText>
        </TextWrapper>
        <InputWrapper>
          <LoginInput
            placeholder="아이디"
            value={xquareId}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setXquareId(e.target.value)
            }
          />
          <LoginInput
            placeholder="비밀번호"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
              if (e.key === "Enter") {
                fetchData();
              }
            }}
          />
          <Login onClick={handleLogin}>로그인</Login>
        </InputWrapper>
      </LoginWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  margin-top: 160px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Welcome = styled.p`
  font-size: 48px;
  font-weight: bold;
`;

const LoginText = styled.p`
  font-size: 28px;
  color: #676767;
`;

const Login = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 900px;
  height: 80px;
  border-radius: 10px;
  background-color: #333b3d;
  color: #ffffff;
  font-size: 36px;
  font-weight: bold;
  border: none;
`;

export default Loginpage;
