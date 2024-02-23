import styled from "styled-components";
import Header from "../components/Header";
import Banner from "../components/Banner";
import MainClub from "../components/MainClub";
import Footer from "../components/Footer";
import Major from "../components/Major";

const Mainpage = () => {
  return (
    <Container>
      <Header />
      <GapWrapper>
        <Banner />
        <Major />
        <MainClub />
        <Footer />
      </GapWrapper>
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
