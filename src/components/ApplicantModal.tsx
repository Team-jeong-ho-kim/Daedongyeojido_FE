import styled from "styled-components";
import { Link } from "react-router-dom";

const ApplicantModal = ({ onModalToggle }: { onModalToggle: () => void }) => {
  return (
    <Container>
      <ApplicantionRecord to="/ApplicantDetail">지원서 확인</ApplicantionRecord>
      <ApplicantionRecord to="/Record">메모 확인</ApplicantionRecord>
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
  justify-content: space-evenly;
  align-items: center;
  width: 200px;
  height: 180px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.5);
`;

const ApplicantionRecord = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 50px;
  background-color: #333b3d;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  cursor: pointer;
`;

export default ApplicantModal;
