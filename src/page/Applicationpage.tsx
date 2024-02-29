import styled from "styled-components";
import Header from "../components/Header";
import Q_A from "../components/Q_A";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { instance } from "../apis/axios";

export type applyType = {
  oneLiner: string;
  introduction: string;
  hopeMajor: string;
  learn: string;
  noticeId: number;
};

const Applicationpage = () => {
  const [buttonColor, setButtonColor] = useState("#E1E1E1");
  const [isLoginVisible, setIsLoginVisible] = useState(false);

  const handleLoginToggle = () => {
    setIsLoginVisible(!isLoginVisible);
  };

  const [question, setQuestion] = useState<applyType>({
    oneLiner: "",
    introduction: "",
    hopeMajor: "",
    learn: "",
    noticeId: 0,
  });

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

  useEffect(() => {
    const newButtonColor =
      question.oneLiner.length > 5 &&
      question.introduction.length > 5 &&
      question.hopeMajor.length > 5 &&
      question.learn.length > 5
        ? "#333B3D"
        : "#E1E1E1";
    setButtonColor(newButtonColor);
  }, [
    question.oneLiner,
    question.introduction,
    question.hopeMajor,
    question.learn,
  ]);

  return (
    <Container>
      <Header onLoginToggle={handleLoginToggle} />
      <SmallBanner>
        <BannerTitle>동아리 지원</BannerTitle>
        <BnanerContent>
          동아리에 지원해 전공 실력을 더욱 키워보세요.
        </BnanerContent>
      </SmallBanner>
      <Wrapper>
        <Title>동아리이름 지원서</Title>
        <Q_A question={question} setQuestion={setQuestion} />
        <ApplyButton
          bgColor={buttonColor}
          textColor={buttonColor === "#333B3D" ? "#FFFFFF" : "#000000"}
          onClick={() => {
            fetchData();
          }}
        >
          지원하기
        </ApplyButton>
        <Footer />
      </Wrapper>
    </Container>
  );
};
const Container = styled.div``;

const SmallBanner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  width: 100%;
  height: 200px;
  background-color: #333b3d;
  padding-left: 370px;
`;

const BannerTitle = styled.p`
  font-size: 36px;
  font-family: "DXhimchanBold";
  color: white;
`;

const BnanerContent = styled.p`
  font-size: 28px;
  color: white;
`;

const Title = styled.p`
  font-size: 44px;
  font-weight: 900;
  margin-right: 47%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 45px;
  margin-top: 60px;
`;

const ApplyButton = styled.div<{ bgColor?: string; textColor?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 50px;
  background-color: ${(props) => props.bgColor || "#333b3d"};
  color: ${(props) => props.textColor || "#ffffff"};
  font-size: 24px;
  border-radius: 10px;
  margin-left: 50%;
  cursor: pointer;
`;

export default Applicationpage;
