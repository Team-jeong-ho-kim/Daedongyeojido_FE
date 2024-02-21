import styled from "styled-components";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { Profile } from "../assets";
import MyAlarm from "../components/MyAlarm";
import Footer from "../components/Footer";
import Alarm from "../components/Alarm";
import { instance } from "../apis/axios";

interface Club {
  name: string;
  myClub: string;
  myReport: {
    clubName: string;
    hopeMajor: string;
    deadline: string;
    passingResult: string;
  }[];
}

const MajorLabel = (hopeMajor: string) => {
  switch (hopeMajor) {
    case "FRONT":
      return "프론트엔드";
    case "BACK":
      return "백엔드";
    case "SECURITY":
      return "보안";
    case "IOS":
      return "아이오에스";
    case "AND":
      return "안드로이드";
    case "FLUTTER":
      return "플러터";
    case "EMBEDDED":
      return "임베디드";
    case "AI":
      return "인공지능";
    case "DEVOPS":
      return "데브옵스";
    case "DESIGN":
      return "디자인";
    case "GAME":
      return "게임개발";
    default:
      return "알 수 없음";
  }
};

const Mypage = () => {
  const [alarmVisible, setAlarmVisible_] = useState(false);
  const [my, setMy] = useState<Club>({
    name: "",
    myClub: "",
    myReport: [],
  });

  const fetchData = async () => {
    const response = await instance
      .post("/user/my-info")
      .then((res) => {
        setMy(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      {/* <MyAlarm /> */}
      <Header setAlarmVisible={setAlarmVisible_} />
      <MyPageWrapper>
        <SmallBanner>
          <Title>마이페이지</Title>
          <Explain>마이페이지에서 나의 동아리 지원내역을 확인하세요</Explain>
        </SmallBanner>
        <ProfileWrapper>
          <ProfileImg src={Profile} />
          <MyText>
            <MyName>{my.name}</MyName>
            <MyClub>{my.myClub}</MyClub>
          </MyText>
        </ProfileWrapper>
        <ApplyWrapper>
          <MyApply>{my.name}님의 동아리 지원 내역</MyApply>
          <ClubWrapper>
            {my.myReport &&
              my.myReport.map((club, index) => (
                <Club>
                  <ClubInfo key={index}>
                    <ClubName>{club.clubName}</ClubName>
                    <Major>{MajorLabel(club.hopeMajor)}</Major>
                    <Date>{club.deadline}</Date>
                  </ClubInfo>
                  <Button
                    style={{
                      backgroundColor:
                        club.passingResult === "PASS" ? "#333B3D" : "#B0B0B0",
                    }}
                  >
                    {club.passingResult === "PASS"
                      ? "합격"
                      : club.passingResult === "FAIL"
                      ? "불합격"
                      : club.passingResult === "WAIT"
                      ? "대기"
                      : "알 수 없음"}
                  </Button>
                </Club>
              ))}
          </ClubWrapper>
        </ApplyWrapper>
        <Footer />
      </MyPageWrapper>
      {alarmVisible && <Alarm setAlarmVisible={setAlarmVisible_} />}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

const SmallBanner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  width: 100%;
  height: 200px;
  background-color: #333b3d;
  padding-left: 380px;
`;

const Title = styled.p`
  color: White;
  font-size: 36px;
  font-family: "DXhimchanBold";
`;

const Explain = styled.p`
  color: White;
  font-size: 28px;
`;

const MyPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 100px;
`;

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-right: 800px;
`;

const ProfileImg = styled.img`
  width: 182px;
  height: 182px;
  border-radius: 100px;
`;

const MyText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const MyName = styled.p`
  font-size: 48px;
  font-family: "DXhimchanBold";
`;

const MyClub = styled.p`
  font-size: 32px;
  font-family: "DXhimchanLight";
  color: #989898;
`;

const ApplyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const MyApply = styled.p`
  display: flex;
  justify-content: flex-start;
  font-size: 36px;
  font-family: "DXhimchanBold";
`;

const ClubWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 500px 500px);
  row-gap: 20px;
  column-gap: 50px;
  justify-content: center;
  align-items: center;
  width: 1150px;
  height: 530px;
  border: 1px solid rgba(110, 110, 135, 0.5);
  border-radius: 16px;
  padding: 52px 40px;
  background-color: #717678;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #2f3542;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    background-color: grey;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }
`;

const Club = styled.div`
  display: flex;
  border: 1px solid #cccccc;
  border-radius: 5px;
  padding: 16px 16px 20px 36px;
  gap: 230px;
  height: 124px;
  background-color: #ffffff;
`;

const ClubInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const ClubName = styled.p`
  font-size: 32px;
`;

const Major = styled.p`
  font-size: 20px;
  color: #495052;
`;

const Date = styled.p`
  font-size: 12px;
  font-family: "DXhimchanLight";
  color: #989898;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  width: 100px;
  height: 32px;
  color: White;
  font-size: 16px;
`;

export default Mypage;
