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
<<<<<<< Updated upstream
  useEffect(() => {
    const requestInterceptor = axios.interceptors.request.use(
      (config) => {
        if (
          classNumber &&
          name &&
          part &&
          localStorage.getItem("access_token")
        ) {
          config.headers.Authorization = `Bearer ${localStorage.getItem(
            "access_token"
          )}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    return () => {
      axios.interceptors.request.eject(requestInterceptor);
    };
  }, [classNumber, name, part]);
  const fetchData = async () => {
    try {
      const requestData = {
        classNumber,
        name,
        part,
=======
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
>>>>>>> Stashed changes
      };

      const response = await axios.post(
        "https://prod-server.xquare.app/jung-ho/auth/login",
        requestData
      );

<<<<<<< Updated upstream
      const accessToken = response.data.access_token;

      localStorage.setItem("access_token", accessToken);

      setUserData(response.data);
=======
      const accessToken = response.data.accessToken;
      localStorage.setItem("access_token", accessToken);

      const storedToken = localStorage.getItem("access_token");

      if (storedToken) {
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${storedToken}`;
      } else {
        delete axios.defaults.headers.common["Authorization"];
      }

      setUserData(response.data);
      setToMain(true);
>>>>>>> Stashed changes
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

<<<<<<< Updated upstream
  useEffect(() => {
    fetchData();
  }, []);

=======
>>>>>>> Stashed changes
  const handleLogin = async () => {
    fetchData();
  };

<<<<<<< Updated upstream
=======
  if (toMain) {
    navigate("/");
  }
>>>>>>> Stashed changes
  return (
    <Container>
      <Header
        setAlarmVisible={setAlarmVisible_}
      />
      <LoginWrapper>
<<<<<<< Updated upstream
        <Welcome>대동여지도에 오신 걸 환영해요!</Welcome>
        <LoginInput
          placeholder="학번"
          value={classNumber}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setClassNumber(e.target.value)
          }
        />
        <LoginInput
          placeholder="이름"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
        />
        <LoginInput
          placeholder="역할"
          value={part}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPart(e.target.value)
          }
        />
        <Login onClick={handleLogin}>로그인</Login>
=======
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
>>>>>>> Stashed changes
      </LoginWrapper>
    </Container>
  );
};

const Container = styled.div``;

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin-top: 200px;
`;

const Welcome = styled.p`
  font-size: 36px;
  font-weight: 900;
`;

const Login = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 55px;
  padding: 16px 24px;
  border-radius: 10px;
  background-color: #ffb800;
  color: #ffffff;
  font-size: 20px;
  font-weight: 400;
  border: none;
`;

export default Loginpage;
