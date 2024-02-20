import styled from "styled-components";
import Header from "../components/Header";
import Banner from "../components/Banner";
import MainClub from "../components/MainClub";
import Footer from "../components/Footer";
import Alarm from "../components/Alarm";
import { useState } from "react";
import Major from "../components/Major";
import Announce from "../components/Annouce";

const Mainpage = () => {
  const [alarmVisible, setAlarmVisible_] = useState(false);
  const [announceVisible, setAnnounceVisible] = useState(true);
  return (
    <Container>
      <Header setAlarmVisible={setAlarmVisible_} />
      <GapWrapper>
        <Banner />
        <Major />
        <MainClub />
        <Footer />
        {alarmVisible && <Alarm setAlarmVisible={setAlarmVisible_} />}
      </GapWrapper>
      {announceVisible && <Announce setAnnounceVisible={setAnnounceVisible} />}
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
