import styled from "styled-components";
import Header from "../components/Header";
import Club from "../components/Club";
import Announce from "../components/UploadAnnounce";
import { useState } from "react";
import { Link } from "react-router-dom";
import { PlusWhite } from "../assets";

interface ClubProps {
  setAnnounceVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setPlusMemberVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const ClubMgtpage: React.FC<ClubProps> = ({
  setAnnounceVisible,
  setPlusMemberVisible,
}) => {
  const [alarmVisible, setAlarmVisible_] = useState(false);
  const [manageVisible, setManageVisible_] = useState(false);
  const [announceVisible, setAnnounceVisible_] = useState(false);
  const [plusMemberVisible, setPlusMemberVisible_] = useState(false);
  const AnnounceClick = () => {
    setAnnounceVisible_((prevVisible) => !prevVisible);
  };
  return (
    <Container>
      <Header
        setAlarmVisible={setAlarmVisible_}
        setManageVisible={setManageVisible_}
      />
      <Buttons>
        <LeftBtns>
          <Button to="" onClick={AnnounceClick}>
            공지사항 등록
          </Button>
          <Button to="/Dine">회식 관리</Button>
        </LeftBtns>
        <PlusClubBtn>
          <input type="text" placeholder="동아리명을 입력해주세요" />
          <PlusIcon src={PlusWhite} />
        </PlusClubBtn>
      </Buttons>
      <Club setPlusMemberVisible={setPlusMemberVisible_} />
      {announceVisible && <Announce setAnnounceVisible={setAnnounceVisible_} />}
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
  justify-content: center;
  gap: 793px;
`;

const LeftBtns = styled.div`
  display: flex;
  gap: 40px;
`;

const Button = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 35px;
  border-radius: 5px;
  background-color: #333b3d;
  color: #ffffff;
  font-size: 20px;
`;

const PlusClubBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 237px;
  height: 45px;
  border-radius: 5px;
  background-color: #333b3d;
  input {
    background-color: #333b3d;
    color: #ffffff;
    font-size: 24px;
    font-weight: 300;

    &::placeholder {
      color: #ffffff;
      font-size: 24px;
      font-weight: 300;
    }
  }
`;

const PlusIcon = styled.img`
  width: 15px;
  height: 15px;
`;

export default ClubMgtpage;
