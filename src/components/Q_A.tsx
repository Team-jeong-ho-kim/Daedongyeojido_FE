import styled from "styled-components";
import { instance } from "../apis/axios";
import { applyType } from "../page/Applicationpage";

interface IQNAProps {
  question: applyType;
  setQuestion: React.Dispatch<React.SetStateAction<applyType>>;
}

const Q_A: React.FC<IQNAProps> = ({ question, setQuestion }: IQNAProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion((prevQuestion) => ({
      ...prevQuestion,
      [e.target.name]: e.target.value,
    }));
  };

  const fetchData = async () => {
    await instance
      .post("/report/apply")
      .then((res) => {
        setQuestion(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <QuestionWrapper>
        <Question>자신을 한 줄로 설명한다면?</Question>
        <Input
          name="oneLiner"
          placeholder="Ex. 감자같이 담백한 개발자 김정호, 항상 모두의 중심인 홍길동, INTP 이현 등"
          value={question.oneLiner}
          onChange={handleInputChange}
        />
        <Question>사용하는 툴을 알려주세요!</Question>
        <Input
          name="introduction"
          placeholder="자유롭게 작성해주세요!"
          value={question.introduction}
          onChange={handleInputChange}
        />
        <Question>관심 있는 전공이 있으신가요?</Question>
        <Input
          name="hopeMajor"
          placeholder="자유롭게 작성해주세요!"
          value={question.hopeMajor}
          onChange={handleInputChange}
        />
        <Question>동아리에 들어와서 배우고 싶은 것이 있으신가요?</Question>
        <Input
          name="learn"
          placeholder="자유롭게 작성해주세요!"
          value={question.learn}
          onChange={handleInputChange}
        />
      </QuestionWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Question = styled.p`
  font-size: 24px;
`;

const Input = styled.input`
  width: 1150px;
  height: 70px;
  padding: 20px 24px;
  color: black;
  font-size: 20px;
  font-weight: 400;
  border-radius: 5px;
  border: 2px solid #b0b0b0;
  &::placeholder {
    color: #6e6e87;
    font-size: 20px;
    font-weight: 400;
  }
  &:focus {
    border: 2px solid #000000;
  }
`;

export default Q_A;
