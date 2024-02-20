import styled from "styled-components";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { Profile } from "../assets";
import MyAlarm from "../components/MyAlarm";
import axios from "axios";
import Footer from "../components/Footer";
import Alarm from "../components/Alarm";

const Mypage = () => {
  const [alarmVisible, setAlarmVisible_] = useState(false);
  const [userData, setUserData] = useState({ name: "", myClub: "" });

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
            <MyName>김정호</MyName>
            <MyClub>{userData?.myClub || "동아리 없음"}</MyClub>
          </MyText>
        </ProfileWrapper>
        <ApplyWrapper>
          <MyApply>{userData?.name}님의 동아리 지원 내역</MyApply>
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
  padding-left: 264px;
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
  margin-right: 1100px;
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
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const MyApply = styled.p`
  font-size: 36px;
  font-family: "DXhimchanBold";
  margin-right: 1100px;
`;

const ClubWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 608px 608px);
  row-gap: 20px;
  column-gap: 48px;
  justify-content: center;
  align-items: center;
  width: 1392px;
  height: 530px;
  border: 1px solid rgba(110, 110, 135, 0.5);
  border-radius: 16px;
  padding: 52px 40px;
  background-color: #717678;
`;

const Club = styled.div`
  display: flex;
  border: 1px solid #cccccc;
  border-radius: 5px;
  padding: 16px 16px 20px 36px;
  gap: 319px;
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
  background-color: #333b3d;
  color: White;
  font-size: 16px;
`;

export default Mypage;
