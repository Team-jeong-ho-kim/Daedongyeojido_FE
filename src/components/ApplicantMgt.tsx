import styled from "styled-components";
import { instance } from "../apis/axios";
import { useEffect, useState } from "react";
import ApplicantModal from "./ApplicantModal";

interface Applicant {
  classNumber: string;
  name: string;
  hopeMajor: string;
  interviewStartTime: string;
  interviewEndTime: string;
  reportPassingResult: string;
  interviewPassingResult: string;
}

const MajorLabel = (hopeMajor: string) => {
  switch (hopeMajor) {
    case "FRONT":
      return "프론트엔드";
    case "BACK":
      return "백엔드";
    case "SECURITY":
      return "보안";
    case "IOS":
      return "아이오에스";
    case "AND":
      return "안드로이드";
    case "FLUTTER":
      return "플러터";
    case "EMBEDDED":
      return "임베디드";
    case "AI":
      return "인공지능";
    case "DEVOPS":
      return "데브옵스";
    case "DESIGN":
      return "디자인";
    case "GAME":
      return "게임개발";
    default:
      return "알 수 없음";
  }
};

const reportresultLabel = (reportPassingResult: string) => {
  switch (reportPassingResult) {
    case "PASS":
      return "합격";
    case "FAIL":
      return "불합격";
    case "WAIT":
      return "대기";
  }
};

const interviewresultLabel = (interviewPassingResult: string) => {
  switch (interviewPassingResult) {
    case "PASS":
      return "합격";
    case "FAIL":
      return "불합격";
    case "WAIT":
      return "대기";
  }
};

const ApplicantMgt = () => {
  const [applicants, setApplicants] = useState<Applicant[]>([]);
  const [selectedApplicant, setSelectedApplicant] = useState<Applicant | null>(
    null
  );
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleModalToggle = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleApplicantClick = (applicant: Applicant) => {
    setSelectedApplicant(applicant);
    handleModalToggle();
  };

  const fetchData = async () => {
    await instance
      .get("/report/applicant/대동여지도")
      .then((res) => {
        setApplicants(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      {applicants &&
        applicants.map((applicant, index) => (
          <Box>
            <Application key={index}>
              <Applicant>
                <ApplicantName onClick={() => handleApplicantClick(applicant)}>
                  {applicant.name}
                </ApplicantName>
                <ApplicantInfo>
                  {applicant.classNumber} &nbsp;
                  {MajorLabel(applicant.hopeMajor)}
                </ApplicantInfo>
                <ApplicantTime>
                  면접 일시 : {applicant.interviewStartTime} ~
                  {applicant.interviewEndTime}
                </ApplicantTime>
              </Applicant>
              <ResultWrapper>
                <ReportInterview>
                  서류 :{reportresultLabel(applicant.reportPassingResult)}
                </ReportInterview>
                <ReportInterview>
                  면접 :{interviewresultLabel(applicant.interviewPassingResult)}
                </ReportInterview>
              </ResultWrapper>
            </Application>
          </Box>
        ))}
      <Modal>
        {selectedApplicant && isModalVisible && (
          <ApplicantModal onModalToggle={handleModalToggle} />
        )}
      </Modal>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px 300px 300px);
  row-gap: 16px;
  column-gap: 60px;
`;

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Box = styled.div`
  height: 123px;
  padding: 15px;
  border: 1px solid rgba(110, 110, 135, 0.5);
  background-color: white;
  border-radius: 10px;
`;

const Application = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Applicant = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const ApplicantName = styled.p`
  font-size: 36px;
  font-family: "DXhimchanBold";
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const ApplicantInfo = styled.p`
  font-size: 20px;
`;

const ApplicantTime = styled.p`
  font-size: 16px;
`;

const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const ReportInterview = styled.div`
  font-size: 13px;
`;

export default ApplicantMgt;
