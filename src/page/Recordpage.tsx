import styled from "styled-components";
import Header from "../components/Header";
import { useState } from "react";

const Recordpage = () => {
  const [isLoginVisible, setIsLoginVisible] = useState(false);

  const handleLoginToggle = () => {
    setIsLoginVisible(!isLoginVisible);
  };
  return (
    <Container>
      <Header onLoginToggle={handleLoginToggle} />
      <Wrapper>
        <TopWrapper>
          <Title>면접 기록</Title>
          <BtnWrapper>
            <Button>합격</Button>
            <Button>불합격</Button>
          </BtnWrapper>
        </TopWrapper>
        <Record placeholder="면접 내용을 기록해보세요."></Record>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const Wrapper = styled.div`
  width: 1184px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BtnWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const Title = styled.p`
  font-size: 40px;
  font-family: "DXhimchanBold";
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 40px;
  border: 1px solid #000000;
  color: #000000;
  border-radius: 10px;
`;

const Record = styled.textarea`
  width: 1184px;
  height: 700px;
  font-size: 24px;
  font-family: "Pretendard";
  border: 2px solid #b0b0b0;
  border-radius: 5px;
  padding: 15px;
  resize: none;
  &::placeholder {
    font-size: 24px;
    font-family: "Pretendard";
    color: #b0b0b0;
  }
  &:focus {
    border: 2px solid #000000;
  }
`;

export default Recordpage;
