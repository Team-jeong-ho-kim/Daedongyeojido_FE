import styled from "styled-components";
import { LogoBlack } from "../assets";
import { Link } from "react-router-dom";

interface StyledContainerProps {
  partonly: boolean;
}

interface HeaderProps {
  onLoginToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLoginToggle }) => {
  const accessToken = localStorage.getItem("access_token");
  const part = localStorage.getItem("part");
  const partonly =
    part === "CLUB_LEADER_TEACHER" || part === "TEACHER" || part === "ADMIN";

  const LogOut = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("part");
    window.location.reload();
  };

  return (
    <Container partonly={partonly}>
      <Wrapper>
        <LogoWrapper to="/">
          <LogoImg src={LogoBlack} />
          <Name>대동여지도</Name>
        </LogoWrapper>
        {partonly && <TextButton to="/ClubMgt">동아리 관리</TextButton>}
      </Wrapper>
      {accessToken ? (
        <MyPageWrapper>
          <Link to="/My">
            <Text>마이페이지</Text>
          </Link>
          <Line></Line>
          <Text onClick={LogOut}>로그아웃</Text>
        </MyPageWrapper>
      ) : (
        <MyPageWrapper>
          <Text onClick={onLoginToggle}>로그인</Text>
          <Text></Text>
        </MyPageWrapper>
      )}
    </Container>
  );
};

const Container = styled.div<StyledContainerProps>`
  position: sticky;
  top: 0px;
  width: 100%;
  height: 64px;
  background-color: White;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 2px 4px 0 hsla(0, 0%, 80.8%, 0.5);
  z-index: 10;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
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
  font-size: 26px;
`;

const Text = styled.p`
  font-size: 22px;
  font-family: "DXhimchanLight";
`;

const Line = styled.div`
  height: 30px;
  border: 1px solid #aca6a6;
`;

const MyPageWrapper = styled.div`
  display: flex;
  gap: 15px;
`;

export default Header;
