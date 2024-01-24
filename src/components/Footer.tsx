import styled from "styled-components";
import { LogoImg } from "../assets";

const Footer = () => {
  return (
    <Container>
      <FooterWrapper>
        <Majors>
          <Major>BackEnd</Major>
          <Major>FrontEnd</Major>
          <Major>Android</Major>
          <Major>iOS</Major>
          <Major>Design</Major>
        </Majors>
        <Logo src={LogoImg} />
      </FooterWrapper>
      <Line></Line>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  height: 317px;
  background-color: #e3e3e8;
  padding: 48px 60px;
`;

const FooterWrapper = styled.div`
  display: flex;
  gap: 1094px;
`;

const Majors = styled.div`
  display: flex;
  gap: 50px;
`;

const Major = styled.p`
  color: #6e6e87;
  font-size: 20px;
  font-weight: 400;
`;

const Logo = styled.img`
  width: 155px;
  height: 155px;
`;

const Line = styled.div`
  width: 1770px;
  height: 1px;
  background-color: black;
`;

export default Footer;
