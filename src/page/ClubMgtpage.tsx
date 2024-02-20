import styled from "styled-components";
import Header from "../components/Header";
import Club from "../components/Club";
import Announce from "../components/Announce";
import PlusMember from "../components/PlusMember";
import { useState } from "react";
import { Link } from "react-router-dom";

interface ClubProps {
  setAnnounceVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setPlusMemberVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const ClubMgtpage: React.FC<ClubProps> = ({
  setAnnounceVisible,
  setPlusMemberVisible,
}) => {
  const [alarmVisible, setAlarmVisible_] = useState(false);
  const [announceVisible, setAnnounceVisible_] = useState(false);
  const [plusMemberVisible, setPlusMemberVisible_] = useState(false);
  const AnnounceClick = () => {
    setAnnounceVisible_((prevVisible) => !prevVisible);
  };
  const PlusMemberClick = () => {
    setPlusMemberVisible_((prevVisible) => !prevVisible);
  };
  return (
    <Container>
      <Header
        setAlarmVisible={setAlarmVisible_}
      />
      <Buttons>
        <AnnounceBtn onClick={AnnounceClick}>공지사항 등록</AnnounceBtn>
        <DineBtn to="/Dine">회식 관리</DineBtn>
        <PlusClubBtn onClick={PlusMemberClick}>동아리 추가하기</PlusClubBtn>
      </Buttons>
      <Club />
      {announceVisible && <Announce setAnnounceVisible={setAnnounceVisible_} />}
      {plusMemberVisible && 
        <PlusMember setPlusMemberVisible={setPlusMemberVisible_} />
      }
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
const DineBtn = styled(Link)`
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
