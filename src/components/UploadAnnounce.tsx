import styled from "styled-components";

interface AnnounceProps {
  setAnnounceVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const UploadAnnounce: React.FC<AnnounceProps> = ({ setAnnounceVisible }) => {
  return (
    <Container>
      <Text>공지사항 등록</Text>
      <Inputs>
        <TitleInput placeholder="공지 제목을 입력해주세요." />
        <ContentsInput placeholder="공지 내용을 입력해주세요." />
      </Inputs>
      <AnnounceBtn>공지 등록하기</AnnounceBtn>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 200px;
  left: 640px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 600px;
  height: 500px;
  background-color: #ffffff;
  padding: 32px 24px;
  border-radius: 10px;
  box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.5);
`;

const Text = styled.p`
  font-size: 20px;
  font-family: "DXhimchanBold";
`;

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const TitleInput = styled.input`
  height: 43px;
  font-size: 24px;
  padding: 16px 24px;
  border-radius: 10px;
  border: 1px solid rgba(110, 110, 135, 0.5);
  &::placeholder {
    font-size: 24px;
    color: #6e6e87;
  }
`;

const ContentsInput = styled.textarea`
  height: 286px;
  font-size: 20px;
  padding: 24px;
  border-radius: 10px;
  resize: none;
  border: 1px solid rgba(110, 110, 135, 0.5);
  &::placeholder {
    font-size: 20px;
    color: #6e6e87;
  }
`;

const AnnounceBtn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 35px;
  color: #ffffff;
  border-radius: 8px;
  background-color: #333b3d;
  margin-left: 400px;
`;

export default UploadAnnounce;
