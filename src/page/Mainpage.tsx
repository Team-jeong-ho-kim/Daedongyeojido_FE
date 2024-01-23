import styled from "styled-components";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Club from "../components/Club";
import Footer from "../components/Footer";
import Alarm from "../components/Alarm";
import ClubMgt from "../components/ClubMgt";

const Mainpage = () => {
  return (
    <Container>
      <Header />
      <Banner />
      <Club />
      <Footer />
      <Alarm />
      <ClubMgt />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 80px;
`;
export default Mainpage;