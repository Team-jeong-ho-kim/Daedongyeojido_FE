import styled from "styled-components";
import { Close } from "../assets";

interface AnnounceProps {
  setAnnounceVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Announce: React.FC<AnnounceProps> = ({ setAnnounceVisible }) => {
  const handleClose = () => {
    setAnnounceVisible(false);
  };

  return (
    <Container>
      <TopWrapper>
        <Title>공지사항 제목입니다람쥐에헤헤</Title>
        <CloseIcon src={Close} onClick={handleClose} />
      </TopWrapper>
      <Contents>
        우아 공지사항이다 하하ㅏㅎ 아 자고 싶다 젤리 먹고싶다 뽀로로 밀크맛
        마시고 싶다 우헤헤ㅔㅎ헤헤ㅔ헿으으아ㅡ에에에ㅡ에ㅡ에ㅡㅔ으ㅔ으ㅔ
        아에아ㅡㅔ이ㅡㅡ이ㅡㅡ에ㅡㅔ으ㅏㅡ어ㅜ어
        으ㅏㅡㅇ에ㅡㅏ으ㅔㅡ아ㅡ으ㅏ으ㅏ
      </Contents>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 330px;
  left: 560px;
  display: flex;
  flex-direction: column;
  gap: 23px;
  width: 800px;
  height: 377px;
  background-color: White;
  border: 1px solid black;
  border-radius: 10px;
  padding: 40px 40px 40px 100px;
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
`;

const Contents = styled.p`
  width: 500px;
  font-size: 28px;
`;

export default Announce;
