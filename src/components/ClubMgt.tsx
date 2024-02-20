import { Link } from "react-router-dom";
import styled from "styled-components";

interface AlarmProps {
  setManageVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const ClubMgt: React.FC<AlarmProps> = ({ setManageVisible }) => {
  return (
    <Container>
      <Check to="/ApplicantMgt">
        <p>지원자 확인</p>
      </Check>
      <Check to="/ApplicantMgt">
        <p>회식 신청</p>
      </Check>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 100px;
  left: 600px;
  width: 150px;
  height: 116px;
  background-color: #ffffff;
  box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
`;

const Check = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 58px;
  > p {
    font-size: 16px;
    font-weight: 400;
  }
`;

export default ClubMgt;
