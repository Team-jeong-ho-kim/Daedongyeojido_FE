import styled from "styled-components";
import { Close } from "../assets";
import { useEffect, useState } from "react";
import { instance } from "../apis/axios";

interface AnnounceProps {
  setAnnounceVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Announce: React.FC<AnnounceProps> = ({ setAnnounceVisible }) => {
  const [announces, setAnnounces] = useState<
    { title: string; contents: string }[]
  >([]);

  const handleClose = () => {
    setAnnounceVisible(false);
  };

  const fetchData = async () => {
    try {
      const response = await instance.post("/main");
      const announcesData = response.data.announcement;
      setAnnounces(announcesData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <TopWrapper>
        {announces.length > 0 && (
          <>
            <Title>{announces[0].title}</Title>
            <CloseIcon src={Close} onClick={handleClose} />
          </>
        )}
      </TopWrapper>
      {announces.length > 0 && <Contents>{announces[0].contents}</Contents>}
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 23px;
  width: 500px;

  height: 377px;
  background-color: White;
  border: 1px solid black;
  border-radius: 10px;
  padding: 40px 40px 40px 60px;
`;

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.p`
  font-size: 36px;
  font-weight: bold;
`;

const CloseIcon = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

const Contents = styled.p`
  word-wrap: break-word;
  font-size: 28px;
  font-family: "Pretendard";
`;

export default Announce;
