import styled from "styled-components";
import Header from "../components/Header";
import Banner from "../components/Banner";
import MainClub from "../components/MainClub";
import Footer from "../components/Footer";
import Major from "../components/Major";
import { useState } from "react";
import Login from "../components/Login";

const Mainpage = () => {
  const [isLoginVisible, setIsLoginVisible] = useState(false);

  const handleLoginToggle = () => {
    setIsLoginVisible(!isLoginVisible);
  };
  return (
    <Container>
      <Header onLoginToggle={handleLoginToggle} />
      <GapWrapper>
        <Banner />
        <Major />
        <MainClub />
        <Footer />
      </GapWrapper>
      {isLoginVisible && <Login onLoginToggle={handleLoginToggle} />}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

const GapWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;
export default Mainpage;
