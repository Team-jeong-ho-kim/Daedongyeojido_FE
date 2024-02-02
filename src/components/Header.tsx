import styled from "styled-components";
import { Alarm, Logo } from "../assets";
import { useState } from "react";
import ClubMgt from "./ClubMgt";
import { Link } from "react-router-dom";

interface HeaderProps {
  setAlarmVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setManageVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({
  setAlarmVisible,
  setManageVisible,
}) => {
  const [alarmVisible, setAlarmVisible_] = useState(false);
  const [manageVisible, setManageVisible_] = useState(false);

  const AlarmClick = () => {
    setAlarmVisible((prevVisible) => !prevVisible);
  };

  const ManageClick = () => {
    setManageVisible((prevVisible) => !prevVisible);
  };

  return (
    <Container>
      <LogoImg src={Logo} />
      <ButtonWrapper>
        <AlarmImg src={Alarm} onClick={AlarmClick} />
        <ManageButton onClick={ManageClick}>동아리 관리</ManageButton>
        <LoginButton to="/login">로그인</LoginButton>
      </ButtonWrapper>
      {alarmVisible && <Alarm setAlarmVisible={setAlarmVisible_} />}
      {manageVisible && <ClubMgt setManageVisible={setManageVisible_} />}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: #050045;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1300px;
`;

const LogoImg = styled.img`
  height: 60px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 30px;
`;

const AlarmImg = styled.img`
  width: 36px;
  height: 36px;
`;

const ManageButton = styled.div`
  width: 100px;
  height: 30px;
  background-color: #ffb800;
  color: white;
  border-radius: 8px;
  text-align: center;
  text-justify: center;
  line-height: 30px;
`;

const LoginButton = styled(Link)`
  width: 70px;
  height: 30px;
  background-color: #ffb800;
  color: white;
  border-radius: 8px;
  text-align: center;
  text-justify: center;
  line-height: 30px;
`;

export default Header;
