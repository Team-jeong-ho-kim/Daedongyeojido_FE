import styled from "styled-components";
import { Alarm, LogoBlack, MyPage } from "../assets";
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
      <HeadWrapper>
        <Wrapper>
          <LogoWrapper to="/">
            <LogoImg src={LogoBlack} />
            <Name>대동여지도</Name>
          </LogoWrapper>
          <ButtonWrapper>
            <TextButton to="/ApplicantMgt">지원자 확인</TextButton>
            <TextButton to="/ClubMgt">동아리 관리</TextButton>
            <TextButton to="">회식 신청</TextButton>
          </ButtonWrapper>
        </Wrapper>
        <IconWrapper>
          <AlarmImg src={Alarm} onClick={AlarmClick} />
          <Link to="/My">
            <MyPageImg src={MyPage} />
          </Link>
        </IconWrapper>
      </HeadWrapper>
      {alarmVisible && <Alarm setAlarmVisible={setAlarmVisible_} />}
    </Container>
  );
};

const Container = styled.div`
  position: sticky;
  top: 0px;
  width: 100vw;
  height: 64px;
  background-color: White;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 710px;
  z-index: 10;
`;

const HeadWrapper = styled.div`
  width: 1444px;
  display: flex;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  margin-left: 26px;
  display: flex;
  gap: 100px;
  width: 619px;
  @media screen and (max-width: 1024px) {
    gap: 50px;
  }
  @media screen and (max-width: 768px) {
    gap: 20px;
  }
`;

const LogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
`;

const TextButton = styled(Link)`
  font-family: "DXhimchanLight";
  font-size: 20px;
`;

const LogoImg = styled.img`
  width: 32px;
  height: 48px;
`;

const Name = styled.p`
  font-family: "DXhimchanBold";
  font-size: 26px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
  @media screen and (max-width: 1024px) {
    gap: 40px;
  }
  @media screen and (max-width: 768px) {
    gap: 15px;
  }
`;

const IconWrapper = styled.div`
  margin-right: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  width: 106px;
`;

const AlarmImg = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 26px;
`;

const MyPageImg = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
`;

export default Header;
