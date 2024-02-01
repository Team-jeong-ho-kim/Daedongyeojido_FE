import styled from "styled-components";
import Header from "../components/Header";
import { useState } from "react";
import { Profile } from "../assets";
import MyAlarm from "../components/MyAlarm";

const Mypage = () => {
  const [alarmVisible, setAlarmVisible_] = useState(false);
  const [manageVisible, setManageVisible_] = useState(false);

  const Clubs = [
    { name: "대동여지도", major: "프론트엔드", date: "~", state: "대기" },
    { name: "대동여지도", major: "백엔드", date: "~", state: "합격" },
    { name: "대동여지도", major: "ios", date: "~", state: "대기" },
    { name: "대동여지도", major: "안드로이드", date: "~", state: "대기" },
    { name: "대동여지도", major: "디자인", date: "~", state: "불합격" },
    { name: "대동여지도", major: "프론트엔드", date: "~", state: "합격" },
  ];
  return (
    <Container>
      <MyAlarm />
      <Header/>
      <MyPageWrapper>
        <ProfileWrapper>
          <ProfileImg src={Profile} />
          <MyName>김정호</MyName>
          <MyClub>동아리 없음</MyClub>
        </ProfileWrapper>
        <ApplyWrapper>
          <MyApply>김정호님의 지원 내역</MyApply>
          <ClubWrapper>
            {Clubs.map((element) => (
              <Club>
                <ClubInfo>
                  <ClubName>{element.name}</ClubName>
                  <Major>{element.major}</Major>
                  <Date>{element.date}</Date>
                </ClubInfo>
                <Button>{element.state}</Button>
              </Club>
            ))}
          </ClubWrapper>
        </ApplyWrapper>
      </MyPageWrapper>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

const MyPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 50px;
`;

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const ProfileImg = styled.img`
  width: 182px;
  height: 182px;
  border-radius: 100px;
`;

const MyName = styled.p`
  font-size: 36px;
  font-weight: 900;
  margin-top: 16px;
`;

const MyClub = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: #6e6e87;
`;

const ApplyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const MyApply = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin-right: 920px;
`;

const ClubWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 350px 350px 350px);
  row-gap: 16px;
  column-gap: 10px;
  width: 1156px;
  height: 370px;
  border: 1px solid rgba(110, 110, 135, 0.5);
  border-radius: 16px;
  padding: 52px 40px;
`;

const Club = styled.div`
  display: flex;
  border: 1px solid #cccccc;
  border-radius: 5px;
  padding: 16px 16px 20px 36px;
  gap: 90px;
`;

const ClubInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ClubName = styled.p`
  font-size: 24px;
  font-weight: 700;
`;

const Major = styled.p`
  font-size: 22px;
  font-weight: 500;
`;

const Date = styled.p`
  font-size: 12px;
  font-weight: 300;
  color: #6e6e87;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  width: 75px;
  height: 30px;
  padding: 8px 20px;
  background-color: #cccccc;
`;

export default Mypage;
