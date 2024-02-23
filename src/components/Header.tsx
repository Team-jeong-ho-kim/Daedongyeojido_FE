import styled from "styled-components";
import { LogoBlack, MyPage } from "../assets";

import { Link } from "react-router-dom";

const Header = () => {
  const accessToken = localStorage.getItem("access_token");

  return (
    <Container>
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
      {accessToken ? (
        <Link to="/My">
          <MyPageImg src={MyPage} />
        </Link>
      ) : (
        <Link to="/login">
          <MyPageImg src={MyPage} />
        </Link>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: sticky;
  top: 0px;
  width: 100%;
  height: 64px;
  background-color: White;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 610px;
  box-shadow: 0 2px 4px 0 hsla(0, 0%, 80.8%, 0.5);
  z-index: 10;
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
  gap: 30px;
`;

const MyPageImg = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
`;

export default Header;
