import styled from "styled-components";
import Header from "../components/Header";
import ApplicantMgt from "../components/ApplicantMgt";
import { useState } from "react";

const ApplicantMgtpage = () => {
  const [isLoginVisible, setIsLoginVisible] = useState(false);

  const handleLoginToggle = () => {
    setIsLoginVisible(!isLoginVisible);
  };
  const applicants = [
    { name: "김정호", info: "1305, FrontEnd" },
    { name: "김정호", info: "1305, FrontEnd" },
    { name: "김정호", info: "1305, FrontEnd" },
    { name: "김정호", info: "1305, FrontEnd" },
    { name: "김정호", info: "1305, FrontEnd" },
    { name: "김정호", info: "1305, FrontEnd" },
  ];
  return (
    <Container>
      <Header onLoginToggle={handleLoginToggle} />
      <Wrapper>
        <Title>동아리 지원자 관리</Title>
        <ApplicantWrapper>
          {applicants.map((element) => (
            <ApplicantMgt name={element.name} info={element.info} />
          ))}
        </ApplicantWrapper>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin-top: 60px;
`;

const Title = styled.p`
  font-size: 44px;
  font-weight: 900;
  margin-right: 775px;
`;

const ApplicantWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 370px 370px 370px);
  row-gap: 16px;
  column-gap: 23px;
`;

export default ApplicantMgtpage;
