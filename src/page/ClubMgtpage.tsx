import styled from "styled-components";
import Header from "../components/Header";
import Club from "../components/Club";
import Announce from "../components/UploadAnnounce";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PlusWhite } from "../assets";
import { createClub, postPage } from "../apis/admin";

interface ClubProps {
  setPlusMemberVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

type MemberType = {
  userName: string;
  classNumber: string;
  part:
    | "INDEPENDENT"
    | "CLUB_MEMBER"
    | "CLUB_LEADER"
    | "TEACHER"
    | "CLUB_LEADER_TEACHER";
};

type ClubType = {
  clubName: string;
  teacherName: string;
  messCount: number;
  memberResponses: MemberType[];
};

const ClubMgtpage: React.FC<ClubProps> = () => {
  const [clubData, setClubData] = useState<ClubType[]>();
  const [clubName, setClubName] = useState<string>("");
  const [announceVisible, setAnnounceVisible_] = useState(false);
  const [isLoginVisible, setIsLoginVisible] = useState(false);

  const AnnounceClick = () => {
    setAnnounceVisible_((prevVisible) => !prevVisible);
  };

  const handleLoginToggle = () => {
    setIsLoginVisible(!isLoginVisible);
  };

  useEffect(() => {
    postPage()
      .then((res) => {
        setClubData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClubName(e.target.value);
  };

  const handleOnKeyPress = () => {
    createClub(clubName)
      .then(() => window.location.reload())
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <Header onLoginToggle={handleLoginToggle} />
      <Buttons>
        <LeftBtns>
          <Button to="" onClick={AnnounceClick}>
            공지사항 등록
          </Button>
          <Button to="/Dine">회식 관리</Button>
        </LeftBtns>
        <PlusClubBtn>
          <input
            type="text"
            placeholder="동아리명을 입력해주세요"
            value={clubName}
            onChange={onChange}
          />
          <PlusIcon src={PlusWhite} onClick={handleOnKeyPress} />
        </PlusClubBtn>
      </Buttons>
      <Club clubs={clubData} />
      {announceVisible && <Announce setAnnounceVisible={setAnnounceVisible_} />}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Buttons = styled.div`
  width: 100%;
  max-width: 1392px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
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
    font-family: "DXhimchanLight";

    &::placeholder {
      color: #ffffff;
      font-size: 24px;
      font-family: "DXhimchanLight";
    }
  }
`;

const PlusIcon = styled.img`
  width: 15px;
  height: 15px;
  cursor: pointer;
`;

export default ClubMgtpage;
