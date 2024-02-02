import styled from "styled-components";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import LoginInput from "../components/LoginInput";
import axios from "axios";

const Loginpage = () => {
  const [alarmVisible, setAlarmVisible_] = useState(false);
  const [manageVisible, setManageVisible_] = useState(false);
  const [classNumber, setClassNumber] = useState("");
  const [name, setName] = useState("");
  const [part, setPart] = useState("");
  const [userData, setUserData] = useState({});
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

  useEffect(() => {
    fetchData();
  }, []);

  const handleLogin = async () => {
    fetchData();
  };

  return (
    <Container>
      <Header
        setAlarmVisible={setAlarmVisible_}
        setManageVisible={setManageVisible_}
      />
      <LoginWrapper>
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
