import styled from "styled-components";

interface Props {
  ask: string;
  placeholder: string;
}

const Q_A: React.FC<Props> = (props) => {
  return (
    <Container>
      <QuestionWrapper>
        <Question>{props.ask}</Question>
        <Input placeholder={props.placeholder}></Input>
      </QuestionWrapper>
    </Container>
  );
};

const Container = styled.div``;

const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Question = styled.p`
  font-size: 24px;
  font-weight: 600;
`;

const Input = styled.input`
  width: 1200px;
  height: 70px;
  padding: 20px 24px;
  color: black;
  font-size: 20px;
  font-weight: 400;
  border-radius: 5px;
  border: 1px solid rgba(110, 110, 135, 0.5);
  &::placeholder {
    color: #6e6e87;
    font-size: 20px;
    font-weight: 400;
  }
  &:focus {
    box-shadow: 0px 0px 10px 0px #5148bf;
  }
`;

export default Q_A;
