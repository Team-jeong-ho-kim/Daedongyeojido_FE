import styled from "styled-components";
import { Alarm, Logo } from "../assets";
import { useState } from "react";
import { Link } from "react-router-dom";

interface HeaderProps {
  setAlarmVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ setAlarmVisible }) => {
  const [alarmVisible, setAlarmVisible_] = useState(false);

  const AlarmClick = () => {
    setAlarmVisible((prevVisible) => !prevVisible);
  };

  return (
    <Container>
<<<<<<< Updated upstream
      <LogoImg src={Logo} />
      <ButtonWrapper>
=======
      <Wrapper>
        <LogoWrapper to="/">
          <LogoImg src={LogoBlack} />
          <Name>대동여지도</Name>
        </LogoWrapper>
        <ButtonWrapper>
          <TextButton to="/ApplicantMgt">지원자 확인</TextButton>
          <TextButton to="/ClubMgt">동아리 관리</TextButton>
          <TextButton to="" >회식 신청</TextButton>
        </ButtonWrapper>
      </Wrapper>
      <IconWrapper>
>>>>>>> Stashed changes
        <AlarmImg src={Alarm} onClick={AlarmClick} />
        <ManageButton onClick={ManageClick}>동아리 관리</ManageButton>
        <LoginButton to="/login">로그인</LoginButton>
      </ButtonWrapper>
      {alarmVisible && <Alarm setAlarmVisible={setAlarmVisible_} />}
    </Container>
  );
};

const Container = styled.div`
  position: sticky;
  top: 0px;
  width: 100%;
  height: 80px;
  background-color: #050045;
  display: flex;
  justify-content: center;
  align-items: center;
<<<<<<< Updated upstream
  gap: 1300px;
`;

const LogoImg = styled.img`
  height: 60px;
=======
  gap: 650px;
  z-index: 1;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 30px;
`;

const LogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
`;

const TextButton = styled(Link)`
  font-size: 20px;
  font-weight: 300;
`;

const LogoImg = styled.img`
  width: 32px;
  height: 48px;
`;

const Name = styled.p`
  font-size: 26px;
  font-weight: 700;
>>>>>>> Stashed changes
`;

const ButtonWrapper = styled.div`
  display: flex;
<<<<<<< Updated upstream
  gap: 30px;
=======
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
>>>>>>> Stashed changes
`;

const AlarmImg = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 26px;
`;

<<<<<<< Updated upstream
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
=======
const MyPageImg = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
>>>>>>> Stashed changes
`;

export default Header;
