import styled from "styled-components";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Club from "../components/Club";
import Footer from "../components/Footer";
import Alarm from "../components/Alarm";
import ClubMgt from "../components/ClubMgt";
import { useState } from "react";

const Mainpage = () => {
  const [alarmVisible, setAlarmVisible_] = useState(false);
  const [manageVisible, setManageVisible_] = useState(false);
  return (
    <Container>
      <Header
        setAlarmVisible={setAlarmVisible_}
        setManageVisible={setManageVisible_}
      />
      <Banner />
      <Club />
      <Footer />
      {alarmVisible && <Alarm setAlarmVisible={setAlarmVisible_} />}
      {manageVisible && <ClubMgt setManageVisible={setManageVisible_} />}
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
