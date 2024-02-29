import styled from "styled-components";
import { useEffect, useState } from "react";
import { instance } from "../apis/axios";

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
      const response = await instance.get("/main");
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
  column-gap: 2%;
  justify-content: space-around;
  padding: 0px 20%;
  @media (max-width: 1150px) {
    grid-template-columns: repeat(auto-fill, 100px 100px 100px 100px 100px);
  }
`;

const ClubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 200px;
  height: 300px;
  @media (max-width: 1150px) {
    width: 100px;
    height: 150px;
  }
`;

const ClubLogo = styled.img`
  width: 200px;
  height: 200px;
  border: 1px solid;
  @media (max-width: 1150px) {
    width: 100px;
    height: 100px;
  }
`;

const ClubName = styled.p`
  font-size: 32px;
  @media (max-width: 1150px) {
    font-size: 24px;
  }
`;

const ClubInfo = styled.p`
  color: #333b3d;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 15px;
  font-family: "DXhimchanLight";
  @media (max-width: 1150px) {
    font-size: 10px;
  }
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
  font-family: "DXhimchanLight";
  color: #333b3d;
  @media (max-width: 1150px) {
    font-size: 8px;
  }
`;

export default MainClub;
