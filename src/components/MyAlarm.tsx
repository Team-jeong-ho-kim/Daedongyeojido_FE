import styled from "styled-components";

const MyAlarm = () => {
  return (
    <Container>
      <Text>
        <Alarm>알림</Alarm>
        <Detail>동아리를 대동여지도로 확정 하시겠습니까?</Detail>
        <Warning>동아리는 한 번 확정한 후에는 수정할 수 없습니다.</Warning>
      </Text>
      <ButtonWrapper>
        <Line></Line>
        <Buttons>
          <CancleBtn>취소하기</CancleBtn>
          <SmallLine></SmallLine>
          <BackBtn>돌아가기</BackBtn>
        </Buttons>
      </ButtonWrapper>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 350px;
  left: 740px;
  display: flex;
  flex-direction: column;
  gap: 57px;
  width: 441px;
  height: 251px;
  background-color: #ffffff;
  border-radius: 16px 16px 16px 16px;
  box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.5);
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-top: 36px;
`;

const Alarm = styled.p`
  font-size: 24px;
  font-weight: 900;
  color: #0000ff;
`;

const Detail = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

const Warning = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #6e6e87;
`;

const ButtonWrapper = styled.div``;

const Line = styled.div`
  width: 439px;
  height: 1px;
  border: solid 1px #cccccc;
`;

const Buttons = styled.div`
  display: flex;
`;

const SmallLine = styled.div`
  width: 1px;
  height: 50px;
  border: solid 1px #cccccc;
`;

const CancleBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 220px;
  height: 50px;
  border-radius: 0px 0px 0px 16px;
  font-size: 16px;
  font-weight: 400;
`;

const BackBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 220px;
  height: 50px;
  border-radius: 0px 0px 16px 0px;
  font-size: 16px;
  font-weight: 400;
`;

export default MyAlarm;
