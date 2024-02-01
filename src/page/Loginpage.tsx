import styled from "styled-components";
import Header from "../components/Header";
import { useState } from "react";
import LoginInput from "../components/LoginInput";

const Loginpage = () => {
  const [alarmVisible, setAlarmVisible_] = useState(false);
  const [manageVisible, setManageVisible_] = useState(false);
  return (
    <Container>
      <Header
        setAlarmVisible={setAlarmVisible_}
        setManageVisible={setManageVisible_}
      />
      <LoginWrapper>
        <Welcome>대동여지도에 오신 걸 환영해요!</Welcome>
        <Text>로그인 후 더 많은 기능을 사용해보세요 :&#41;</Text>
        <InputWrapper>
          <LoginInput placeholder="아이디" type="text" />
          <LoginInput placeholder="비밀번호" type="password" />
        </InputWrapper>
        <Login>로그인</Login>
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

const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #6e6e87;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
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
