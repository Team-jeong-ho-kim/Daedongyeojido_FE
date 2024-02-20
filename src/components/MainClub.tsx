import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";

interface Club {
  clubImageUrl: string;
  clubName: string;
  title: string;
  tags: string;
}

const MainClub = () => {
  const [clubs, setClubs] = useState<Club[]>([]);

  const fetchData = async () => {
    try {
      const response = await axios.post(
        "https://prod-server.xquare.app/jung-ho/main"
      );
      const allClubResponses = response.data.allClubResponses;

      if (Array.isArray(allClubResponses)) {
        setClubs(allClubResponses);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
<<<<<<< Updated upstream
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
=======
      {clubs.map((club, index) => (
        <ClubWrapper key={index}>
          <ClubLogo src={club.clubImageUrl} alt="동아리 이미지" />
          <ClubName>{club.clubName}</ClubName>
          <ClubInfo>{club.title}</ClubInfo>
          <TagWrapper>
            <ClubTag>{club.tags}</ClubTag>
            <ClubTag>{club.tags}</ClubTag>
            <ClubTag>{club.tags}</ClubTag>
          </TagWrapper>
>>>>>>> Stashed changes
        </ClubWrapper>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px 200px 200px 200px 200px);
<<<<<<< Updated upstream
  row-gap: 50px;
=======
  row-gap: 40px;
>>>>>>> Stashed changes
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
