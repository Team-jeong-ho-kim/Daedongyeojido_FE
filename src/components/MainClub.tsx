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
        </ClubWrapper>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px 200px 200px 200px 200px);
  row-gap: 40px;
  column-gap: 40px;
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
