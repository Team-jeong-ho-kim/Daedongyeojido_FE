import { Link } from "react-router-dom";
import styled from "styled-components";

interface Props {
  name: string;
  info: string;
}

const ApplicantMgt: React.FC<Props> = (props) => {
  return (
    <Container>
      <ApplicantWrapper>
        <Applicant>
          <ApplicantName to="/ApplicantDetail">{props.name}</ApplicantName>
          <ApplicantInfo>{props.info}</ApplicantInfo>
        </Applicant>
        <Button>
          <PassBtn>합격</PassBtn>
          <FailureBtn>불합격</FailureBtn>
        </Button>
      </ApplicantWrapper>
    </Container>
  );
};

const Container = styled.div``;

const ApplicantWrapper = styled.div`
  width: 370px;
  height: 110px;
  display: flex;
  padding: 16px 36px;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgba(110, 110, 135, 0.5);
  border-radius: 10px;
`;

const Applicant = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const ApplicantName = styled(Link)`
  font-size: 32px;
  font-weight: 900;
`;

const ApplicantInfo = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

const Button = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const PassBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 35px;
  border-radius: 8px;
  color: #ffffff;
  background-color: #ffb800;
  padding: 8px 28px;
  cursor: pointer;
`;

const FailureBtn = styled.div`
  width: 100px;
  height: 35px;
  border-radius: 8px;
  color: #ffffff;
  background-color: #6e6e87;
  padding: 8px 24px;
  cursor: pointer;
`;

export default ApplicantMgt;
