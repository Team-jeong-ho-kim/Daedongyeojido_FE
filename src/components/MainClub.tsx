import styled from "styled-components";
import { ClubImg } from "../assets";

const MainClub = () => {
  const clubs = [
    {
      img: ClubImg,
      name: "대동여지도",
      info: "아아ㅏ아앙아아ㅏ아아아아아ㅏㅇ",
      tag1: "#친밀한",
      tag2: "#화목한",
      tag3: "#가족같은",
    },
    {
      img: ClubImg,
      name: "대동여지도",
      info: "아아ㅏ아앙아아ㅏ아아아아아ㅏㅇ",
      tag1: "#친밀한",
      tag2: "#화목한",
      tag3: "#가족같은",
    },
    {
      img: ClubImg,
      name: "대동여지도",
      info: "아아ㅏ아앙아아ㅏ아아아아아ㅏㅇ",
      tag1: "#친밀한",
      tag2: "#화목한",
      tag3: "#가족같은",
    },
    {
      img: ClubImg,
      name: "대동여지도",
      info: "아아ㅏ아앙아아ㅏ아아아아아ㅏㅇ",
      tag1: "#친밀한",
      tag2: "#화목한",
      tag3: "#가족같은",
    },
    {
      img: ClubImg,
      name: "대동여지도",
      info: "아아ㅏ아앙아아ㅏ아아아아아ㅏㅇ",
      tag1: "#친밀한",
      tag2: "#화목한",
      tag3: "#가족같은",
    },
    {
      img: ClubImg,
      name: "대동여지도",
      info: "아아ㅏ아앙아아ㅏ아아아아아ㅏㅇ",
      tag1: "#친밀한",
      tag2: "#화목한",
      tag3: "#가족같은",
    },
    {
      img: ClubImg,
      name: "대동여지도",
      info: "아아ㅏ아앙아아ㅏ아아아아아ㅏㅇ",
      tag1: "#친밀한",
      tag2: "#화목한",
      tag3: "#가족같은",
    },
    {
      img: ClubImg,
      name: "대동여지도",
      info: "아아ㅏ아앙아아ㅏ아아아아아ㅏㅇ",
      tag1: "#친밀한",
      tag2: "#화목한",
      tag3: "#가족같은",
    },
    {
      img: ClubImg,
      name: "대동여지도",
      info: "아아ㅏ아앙아아ㅏ아아아아아ㅏㅇ",
      tag1: "#친밀한",
      tag2: "#화목한",
      tag3: "#가족같은",
    },
    {
      img: ClubImg,
      name: "대동여지도",
      info: "아아ㅏ아앙아아ㅏ아아아아아ㅏㅇ",
      tag1: "#친밀한",
      tag2: "#화목한",
      tag3: "#가족같은",
    },
    {
      img: ClubImg,
      name: "대동여지도",
      info: "아아ㅏ아앙아아ㅏ아아아아아ㅏㅇ",
      tag1: "#친밀한",
      tag2: "#화목한",
      tag3: "#가족같은",
    },
  ];
  return (
    <Container>
      {clubs.map((element) => (
        <ClubWrapper>
          <ClubLogo src={element.img} alt="동아리 이미지" />
          <ClubName>{element.name}</ClubName>
          <SmallText>
            <ClubInfo>{element.info}</ClubInfo>
            <TagWrapper>
              <ClubTag>{element.tag1}</ClubTag>
              <ClubTag>{element.tag2}</ClubTag>
              <ClubTag>{element.tag3}</ClubTag>
            </TagWrapper>
          </SmallText>
        </ClubWrapper>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px 200px 200px 200px 200px);
  row-gap: 50px;
  column-gap: 40px;
  justify-content: center;
`;

const ClubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 200px;
  height: 300px;
`;

const ClubLogo = styled.img`
  width: 200px;
  height: 200px;
  border: 1px solid;
`;

const ClubName = styled.p`
  font-size: 24px;
  font-weight: 900;
`;

const SmallText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ClubInfo = styled.p`
  color: #6e6e87;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: Inter;
  font-size: 18px;
  font-weight: 500;
`;

const TagWrapper = styled.div`
  display: flex;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: clip;
`;

const ClubTag = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
`;

export default MainClub;
