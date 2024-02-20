import styled from "styled-components";
import Header from "../components/Header";
import Banner from "../components/Banner";
import MainClub from "../components/MainClub";
import Footer from "../components/Footer";
import Alarm from "../components/Alarm";
import { useState } from "react";

const Mainpage = () => {
  const [alarmVisible, setAlarmVisible_] = useState(false);
<<<<<<< Updated upstream
  const [manageVisible, setManageVisible_] = useState(false);
  return (
    <Container>
      <Header
        setAlarmVisible={setAlarmVisible_}
        setManageVisible={setManageVisible_}
      />
      <Banner />
      <MainClub />
      <Footer />
      {alarmVisible && <Alarm setAlarmVisible={setAlarmVisible_} />}
      {manageVisible && <ClubMgt setManageVisible={setManageVisible_} />}
=======
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
>>>>>>> Stashed changes
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
