import styled from "styled-components";
import Header from "../components/Header";
import { useState } from "react";

const Dinepage = () => {
  const [alarmVisible, setAlarmVisible_] = useState(false);
  const [manageVisible, setManageVisible_] = useState(false);
  const Dines = [
    { name: "대동여지도", time: "2024년 02월 10일 9교시 ~ 10교시 회식 신청" },
    { name: "대동여지도", time: "2024년 02월 10일 9교시 ~ 10교시 회식 신청" },
    { name: "대동여지도", time: "2024년 02월 10일 9교시 ~ 10교시 회식 신청" },
    { name: "대동여지도", time: "2024년 02월 10일 9교시 ~ 10교시 회식 신청" },
  ];
  return (
    <Container>
      <Header
        setAlarmVisible={setAlarmVisible_}
        setManageVisible={setManageVisible_}
      />
      <Title>동아리 회식 관리</Title>
      <Wrapper>
        {Dines.map((element) => (
          <DineWrapper>
            <Club>
              <ClubName>{element.name}</ClubName>
              <DineTime>{element.time}</DineTime>
            </Club>
            <Button>
              <AcceptanceBtn>수락</AcceptanceBtn>
            </Button>
          </DineWrapper>
        ))}
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 55px;
`;

const Title = styled.p`
  font-size: 48px;
  font-weight: bold;
  margin-right: 1100px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
`;

const DineWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1392px;
  height: 130px;
  padding: 25px 35px 30px 35px;
  border-radius: 10px;
  border: 1px solid rgba(110, 110, 135, 0.5);
`;

const Club = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ClubName = styled.p`
  font-size: 40px;
  font-weight: bold;
`;

const DineTime = styled.p`
  font-size: 24px;
`;

const Button = styled.div`
  display: flex;
  gap: 15px;
`;

const AcceptanceBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 50px;
  background-color: #333b3d;
  border-radius: 8px;
  padding: 12px 44px;
  font-size: 24px;
  font-weight: 500;
  color: #ffffff;
  cursor: pointer;
`;

export default Dinepage;
