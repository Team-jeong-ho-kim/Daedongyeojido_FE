import styled from "styled-components";
import Header from "../components/Header";
import Q_A from "../components/Q_A";
import { useState } from "react";

const Applicationpage = () => {
  const [alarmVisible, setAlarmVisible_] = useState(false);
  const [manageVisible, setManageVisible_] = useState(false);
  const questions = [
    {
      ask: "자신을 한 줄로 설명한다면?",
      placeholder:
        "Ex. 감자같이 담백한 개발자 김정호, 항상 모두의 중심인 홍길동, INTP 이현 등",
    },
    {
      ask: "사용하는 툴을 알려주세요!",
      placeholder: "자유롭게 작성해주세요!",
    },
    {
      ask: "관심 있는 전공이 있으신가요?",
      placeholder: "자유롭게 작성해주세요!",
    },
    {
      ask: "동아리에 들어와서 배우고 싶은 것이 있으신가요?",
      placeholder: "자유롭게 작성해주세요!",
    },
  ];
  return (
    <Container>
      <Header
        setAlarmVisible={setAlarmVisible_}
        setManageVisible={setManageVisible_}
      />
      <Wrapper>
        <Title>&#123;동아리이름&#125; 지원서</Title>
        {questions.map((element) => (
          <Q_A ask={element.ask} placeholder={element.placeholder} />
        ))}
        <ApplyButton>지원하기</ApplyButton>
      </Wrapper>
    </Container>
  );
};
const Container = styled.div``;

const Title = styled.p`
  font-size: 44px;
  font-weight: 900;
  margin-right: 800px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;
  margin-top: 60px;
`;

const ApplyButton = styled.div`
  width: 185px;
  height: 50px;
  background-color: #ffb800;
  padding: 12px 44px;
  color: #ffffff;
  font-size: 24px;
  font-weight: 500;
  border-radius: 8px;
  margin-left: 1000px;
  cursor: pointer;
`;

export default Applicationpage;
