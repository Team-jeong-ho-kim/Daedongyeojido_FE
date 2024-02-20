import styled from "styled-components";
import { Github, Instagram, LogoWhite } from "../assets";

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
        <Icons>
          <Icon src={Github} />
          <Icon src={Instagram} />
        </Icons>
        <Logo src={LogoWhite} />
      </FooterWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  width: 100%;
  height: 200px;
  background-color: black;
`;

const FooterWrapper = styled.div`
  display: flex;
  gap: 800px;
`;

const Icons = styled.div`
  display: flex;
  gap: 10px;
`;

const Icon = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 30px;
`;

const Logo = styled.img`
  width: 100px;
  height: 100px;
`;

export default Footer;
