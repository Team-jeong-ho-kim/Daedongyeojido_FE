import styled from "styled-components";
import { useEffect, useState } from "react";
import LoginInput from "../components/LoginInput";
import { instance } from "../apis/axios";
import { Close } from "../assets";

const Login = ({ onLoginToggle }: { onLoginToggle: () => void }) => {
  const [xquareId, setXquareId] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      handleClose();
    }
  }, []);

  const fetchData = async () => {
    const requestData = {
      xquareId,
      password,
    };
    await instance
      .post("/auth/login", requestData)
      .then((res) => {
        localStorage.setItem("access_token", res.data.accessToken);
        localStorage.setItem("refresh_token", res.data.refreshToken);
        localStorage.setItem("part", res.data.part);
        handleClose();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClose = () => {
    onLoginToggle();
  };

  const handleLogin = async () => {
    fetchData();
    onLoginToggle();
  };

  return (
    <Container>
      <CloseIcon src={Close} onClick={handleClose} />
      <Text>대동여지도</Text>
      <InputWrapper>
        <LoginInput
          placeholder="아이디"
          value={xquareId}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setXquareId(e.target.value)
          }
        />
        <LoginInput
          type="password"
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
        <LoginBtn onClick={handleLogin}>로그인</LoginBtn>
      </InputWrapper>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 360px;
  height: 330px;
  padding: 20px 30px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.5);
`;

const CloseIcon = styled.img`
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: 15px;
  height: 15px;
  cursor: pointer;
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
  font-size: 28px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const LoginBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 50px;
  border-radius: 5px;
  background-color: #333b3d;
  color: #ffffff;
  font-size: 24px;
  font-family: "DXhimchanBold";
  border: none;
`;

export default Login;
