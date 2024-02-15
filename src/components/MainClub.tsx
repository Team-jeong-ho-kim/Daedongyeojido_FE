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
          <ClubInfo>{element.info}</ClubInfo>
          <TagWrapper>
            <ClubTag>{element.tag1}</ClubTag>
            <ClubTag>{element.tag2}</ClubTag>
            <ClubTag>{element.tag3}</ClubTag>
          </TagWrapper>
        </ClubWrapper>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px 200px 200px 200px 200px);
  row-gap: 64px;
  column-gap: 74px;
  justify-content: center;
`;

const ClubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 200px;
  height: 300px;
`;

const ClubLogo = styled.img`
  width: 200px;
  height: 200px;
  border: 1px solid;
`;

const ClubName = styled.p`
  font-size: 32px;
`;

const ClubInfo = styled.p`
  color: #333b3d;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: Inter;
  font-size: 15px;
  font-weight: Light;
`;

const TagWrapper = styled.div`
  display: flex;
  gap: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: clip;
`;

const ClubTag = styled.p`
  font-size: 12px;
  font-weight: Light;
  color: #333b3d;
`;

export default MainClub;
