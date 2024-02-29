import styled from "styled-components";
import {
  AI,
  Android,
  Back,
  Design,
  DevOps,
  Embedded,
  Flutter,
  Front,
  FullStack,
  Game,
  Security,
  ios,
} from "../assets";

const Major = () => {
  const majors = [
    { img: Front, name: "프론트엔드" },
    { img: Back, name: "백엔드" },
    { img: DevOps, name: "데브옵스" },
    { img: Android, name: "안드로이드" },
    { img: ios, name: "ios" },
    { img: AI, name: "AI" },
    { img: Embedded, name: "임베디드" },
    { img: Design, name: "디자인" },
    { img: Flutter, name: "플러터" },
    { img: Security, name: "정보보안" },
    { img: FullStack, name: "풀스택" },
    { img: Game, name: "게임" },
  ];
  return (
    <Container>
      <Title>대마고 동아리 여기서 지원하고 도움받자!</Title>
      <MajorWrapper>
        {majors.map((element) => (
          <Majors>
            <MajorImg src={element.img} />
            <MajorName>{element.name}</MajorName>
          </Majors>
        ))}
      </MajorWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding: 0% 17%;
`;

const Title = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  font-family: "DXhimchanLight";
  @media (max-width: 900px) {
    font-size: 28px;
  }
`;

const MajorWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Majors = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MajorImg = styled.img`
  width: 50px;
  height: 50px;
  @media (max-width: 1100px) {
    width: 45px;
    height: 45px;
  }
`;

const MajorName = styled.p`
  font-size: 14px;
  @media (max-width: 1100px) {
    font-size: 12px;
  }
`;

export default Major;
