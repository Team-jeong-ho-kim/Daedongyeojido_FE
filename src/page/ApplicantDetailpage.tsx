import styled from "styled-components";
import Header from "../components/Header";
import Q_A from "../components/Q_A";
import { useState } from "react";

const ApplicantDetailpage = () => {
  const [isLoginVisible, setIsLoginVisible] = useState(false);

  const handleLoginToggle = () => {
    setIsLoginVisible(!isLoginVisible);
  };
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
      <Header onLoginToggle={handleLoginToggle} />
      <Wrapper>
        <Title>1305 김정호 - 지원서</Title>
        {questions.map((element) => (
          <Q_A
            key={element.ask}
            ask={element.ask}
            placeholder={element.placeholder}
          />
        ))}
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

export default ApplicantDetailpage;
