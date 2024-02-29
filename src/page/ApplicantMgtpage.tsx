import styled from "styled-components";
import Header from "../components/Header";
import ApplicantMgt from "../components/ApplicantMgt";
import { useState } from "react";

const ApplicantMgtpage = () => {
  const [isLoginVisible, setIsLoginVisible] = useState(false);

  const handleLoginToggle = () => {
    setIsLoginVisible(!isLoginVisible);
  };

  return (
    <Container>
      <Header onLoginToggle={handleLoginToggle} />
      <ApplicantWrapper>
        <ApplicantMgt />
      </ApplicantWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

const ApplicantWrapper = styled.div`
  padding: 55px 69px;
  width: 1177px;
  height: 800px;
  border: 1px solid black;
  background-color: #e1e1e1;
  border-radius: 10px;
`;

export default ApplicantMgtpage;
