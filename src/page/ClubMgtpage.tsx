import styled from "styled-components";
import Header from "../components/Header";
import Club from "../components/Club";
import Announce from "../components/Announce";
import PlusMember from "../components/PlusMember";
import { useState } from "react";

const ClubMgtpage = () => {
  const [alarmVisible, setAlarmVisible_] = useState(false);
  const [manageVisible, setManageVisible_] = useState(false);
  return (
    <Container>
      <PlusMember />
      <Announce />
      <Header
        setAlarmVisible={setAlarmVisible_}
        setManageVisible={setManageVisible_}
      />
      <Buttons>
        <AnnounceBtn>공지사항 등록</AnnounceBtn>
        <DineBtn>회식 관리</DineBtn>
        <PlusClubBtn>동아리 추가하기</PlusClubBtn>
      </Buttons>
      <Club />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  margin-left: 375px;
`;

const AnnounceBtn = styled.div`
  width: 150px;
  height: 35px;
  padding: 8px 24px;
  border-radius: 8px;
  background-color: #ffb800;
  color: #ffffff;
  font-size: 16px;
  font-weight: 400;
`;
const DineBtn = styled.div`
  width: 120px;
  height: 35px;
  padding: 8px 24px;
  border-radius: 8px;
  background-color: #ffb800;
  color: #ffffff;
  font-size: 16px;
  font-weight: 400;
`;

const PlusClubBtn = styled.div`
  width: 168px;
  height: 35px;
  padding: 8px 24px;
  border-radius: 8px;
  background-color: #ffb800;
  color: #ffffff;
  font-size: 16px;
  font-weight: 400;
`;

export default ClubMgtpage;
