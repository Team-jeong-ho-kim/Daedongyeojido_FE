import styled from "styled-components";
import Header from "../components/Header";

const Dinepage = () => {
  const Dines = [
    { name: "대동여지도", time: "2024년 02월 10일 9교시 ~ 10교시 회식 신청" },
    { name: "대동여지도", time: "2024년 02월 10일 9교시 ~ 10교시 회식 신청" },
    { name: "대동여지도", time: "2024년 02월 10일 9교시 ~ 10교시 회식 신청" },
    { name: "대동여지도", time: "2024년 02월 10일 9교시 ~ 10교시 회식 신청" },
  ];
  return (
    <Container>
      <Header />
      <Wrapper>
        <Title>동아리 회식 관리</Title>
        {Dines.map((element) => (
          <DineWrapper>
            <Club>
              <ClubName>{element.name}</ClubName>
              <DineTime>{element.time}</DineTime>
            </Club>
            <Button>
              <AcceptanceBtn>수락</AcceptanceBtn>
              <RefusalBtn>반대</RefusalBtn>
            </Button>
          </DineWrapper>
        ))}
      </Wrapper>
    </Container>
  );
};

const Container = styled.div``;

const Title = styled.p`
  font-size: 44px;
  font-weight: 900;
  margin: 0px 870px 30px 0px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 60px;
`;

const DineWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1200px;
  height: 110px;
  padding: 20px 36px;
  border-radius: 10px;
  border: 1px solid rgba(110, 110, 135, 0.5);
`;

const Club = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ClubName = styled.p`
  font-size: 36px;
  font-weight: 900;
`;

const DineTime = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

const Button = styled.div`
  display: flex;
  gap: 15px;
`;

const AcceptanceBtn = styled.div`
  width: 140px;
  height: 50px;
  background-color: #ffb800;
  border-radius: 8px;
  padding: 12px 44px;
  font-size: 24px;
  font-weight: 500;
  color: #ffffff;
  cursor: pointer;
`;

const RefusalBtn = styled.div`
  width: 140px;
  height: 50px;
  background-color: #cccccc;
  border-radius: 8px;
  padding: 12px 44px;
  font-size: 24px;
  font-weight: 500;
  color: #ffffff;
  cursor: pointer;
`;

export default Dinepage;
