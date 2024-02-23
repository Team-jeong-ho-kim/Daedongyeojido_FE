import { useEffect, useState } from "react";
import styled from "styled-components";
import { instance } from "../apis/axios";

interface Clubs {
  name: string;
  myClub: string;
  myReport: {
    clubName: string;
    hopeMajor: string;
    deadline: string;
    passingResult: string;
  }[];
}

const MajorLabel = (hopeMajor: string) => {
  switch (hopeMajor) {
    case "FRONT":
      return "프론트엔드";
    case "BACK":
      return "백엔드";
    case "SECURITY":
      return "보안";
    case "IOS":
      return "아이오에스";
    case "AND":
      return "안드로이드";
    case "FLUTTER":
      return "플러터";
    case "EMBEDDED":
      return "임베디드";
    case "AI":
      return "인공지능";
    case "DEVOPS":
      return "데브옵스";
    case "DESIGN":
      return "디자인";
    case "GAME":
      return "게임개발";
    default:
      return "알 수 없음";
  }
};

const resultLabel = (passingResult: string) => {
  switch (passingResult) {
    case "PASS":
      return "합격";
    case "FAIL":
      return "불합격";
    case "WAIT":
      return "대기";
  }
};

const ApplyDetail = () => {
  const [my, setMy] = useState<Clubs>({
    name: "",
    myClub: "",
    myReport: [],
  });

  const fetchData = async () => {
    const response = await instance
      .post("/user/my-info")
      .then((res) => {
        setMy(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <Title>지원내역</Title>
      <Wrapper>
        {my.myReport &&
          my.myReport.map((club) => (
            <ApplyDetails>
              <Club>
                <ClubName>{club.clubName}</ClubName>
                <Text>
                  <MajorDeadline>{MajorLabel(club.hopeMajor)}</MajorDeadline>
                  <MajorDeadline>지원 마감일 : {club.deadline}</MajorDeadline>
                </Text>
              </Club>
              <Button
                style={{
                  backgroundColor:
                    club.passingResult === "PASS" ? "#333B3D" : "#B0B0B0",
                }}
              >
                {resultLabel(club.passingResult)}
              </Button>
            </ApplyDetails>
          ))}
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-top: 45px;
`;

const Title = styled.p`
  font-size: 24px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ApplyDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 880px;
  height: 50px;
  background-color: #f1f1f1;
  padding: 0px 15px;
  border-radius: 5px;
`;

const Club = styled.div`
  display: flex;
  gap: 15px;
`;

const ClubName = styled.p`
  display: flex;
  font-size: 24px;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
`;

const MajorDeadline = styled.p`
  font-size: 12px;
  font-family: "DXhimchanLight";
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 32px;
  background-color: #b0b0b0;
  color: white;
  font-size: 16px;
  border-radius: 10px;
`;

export default ApplyDetail;
