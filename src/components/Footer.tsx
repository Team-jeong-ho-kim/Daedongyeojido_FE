import styled from "styled-components";
import { LogoWhite } from "../assets";

const Footer = () => {
  const members = [
    { major: "Backend", name: "김가은", name2: "변정현" },
    { major: "Frontend", name: "원은지", name2: "이영하" },
    { major: "Android", name: "홍서은" },
    { major: "iOS", name: "홍서은" },
    { major: "Design", name: "이예흔" },
  ];
  return (
    <Container>
      <FooterWrapper>
        <MajorWrapper>
          {members.map((element) => (
            <Majors>
              <Major>{element.major}</Major>
              <Name>{element.name}</Name>
              <Name>{element.name2}</Name>
            </Majors>
          ))}
        </MajorWrapper>
        <Logo src={LogoWhite} />
      </FooterWrapper>
      <Line></Line>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 70px;
  width: 100%;
  height: 317px;
  background-color: black;
  padding: 48px 60px;
`;

const FooterWrapper = styled.div`
  display: flex;
  gap: 510px;
`;

const MajorWrapper = styled.div`
  display: flex;
  gap: 64px;
`;

const Majors = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

const Major = styled.p`
  font-size: 24px;
  font-weight: Light;
  color: white;
  margin-bottom: 16px;
`;

const Name = styled.p`
  font-size: 24px;
  font-weight: Light;
  color: white;
`;

const Logo = styled.img`
  width: 100px;
  height: 100px;
`;

const Line = styled.div`
  width: 1170px;
  height: 1px;
  background-color: white;
`;

export default Footer;
