import styled from "styled-components";
import { LeftArrowBlack, ClubImg, RightArrowBlack } from "../assets";

const Major = () => {
  const majors = [
    { img: ClubImg, name: "프론트엔드" },
    { img: ClubImg, name: "백엔드" },
    { img: ClubImg, name: "안드로이드" },
    { img: ClubImg, name: "ios" },
    { img: ClubImg, name: "AI" },
    { img: ClubImg, name: "임베디드" },
    { img: ClubImg, name: "디자인" },
    { img: ClubImg, name: "플러터" },
    { img: ClubImg, name: "정보보안" },
    { img: ClubImg, name: "풀스택" },
    { img: ClubImg, name: "게임" },
  ];
  return (
    <Container>
      <Title>대마고 동아리 여기서 지원하고 도움받자!</Title>
      <Arrow>
        <ArrowIcon src={LeftArrowBlack} />
        <MajorWrapper>
          {majors.map((element) => (
            <Majors>
              <MajorImg src={element.img} />
              <MajorName>{element.name}</MajorName>
            </Majors>
          ))}
        </MajorWrapper>
        <ArrowIcon src={RightArrowBlack} />
      </Arrow>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 28px;
`;

const Title = styled.p`
  font-size: 36px;
  font-family: "DXhimchanBold";
`;

const Arrow = styled.div`
  display: flex;
  align-items: center;
  gap: 48px;
`;

const ArrowIcon = styled.img`
  width: 10px;
  height: 20px;
`;

const MajorWrapper = styled.div`
  display: flex;
  gap: 50px;
`;

const Majors = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const MajorImg = styled.img`
  width: 50px;
  height: 50px;
`;

const MajorName = styled.p`
  font-size: 14px;
`;

export default Major;
