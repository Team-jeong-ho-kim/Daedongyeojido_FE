import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import Login from "../components/Login";
import { LogoWhite } from "../assets";

const ClubDetailsInfopage = () => {
  const [clubIntro] = useState<boolean>(true);
  const [clubMembers] = useState<boolean>(false);
  const [clubProjects] = useState<boolean>(false);
  const [idealTalent] = useState<boolean>(false);
  const [QnA] = useState<boolean>(false);
  const [isCancel, setIsCancel] = useState<boolean>(false);
  const [isLoginVisible, setIsLoginVisible] = useState(false);

  const handleLoginToggle = () => {
    setIsLoginVisible(!isLoginVisible);
  };

  const handleCancel = () => {
    setIsCancel(!isCancel);
  };

  return (
    <Container>
      <Header onLoginToggle={handleLoginToggle} />
      <ClubBanner>
        <ClubFrame>
          <ClubLogo src={LogoWhite} alt="로고" />
          <ClubInfo>
            <ClubName>대동여지도</ClubName>
            <ClubContents>대마고 동아리 어쩌구 저쩌구</ClubContents>
            <ClubTags>
              <ClubTag>#행복한</ClubTag>
              <ClubTag>#행복한</ClubTag>
              <ClubTag>#행복한</ClubTag>
              <ClubTag>#행복한</ClubTag>
              <ClubTag>#행복한</ClubTag>
              <ClubTag>#행복한</ClubTag>
            </ClubTags>
          </ClubInfo>
        </ClubFrame>
      </ClubBanner>
      <ClubInfoHeader>
        <Wrapper>
          <ClubIntro clubIntro={clubIntro} href="#introduction">
            동아리 소개
          </ClubIntro>
          <ClubMembers clubMembers={clubMembers} href="#members">
            동아리원
          </ClubMembers>
          <ClubProjects clubProjects={clubProjects} href="#projects">
            프로젝트
          </ClubProjects>
          <IdealTalent idealTalent={idealTalent} href="#idealTalent">
            인재상
          </IdealTalent>
          <QuesAndAns QnA={QnA} href="#Q&A">
            QnA
          </QuesAndAns>
        </Wrapper>
      </ClubInfoHeader>
      <ClubInfoMain>
        <ClubDetails>
          <Boxed>
            <Titlebar id="introduction">동아리 소개</Titlebar>
            <Contentbar>
              아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우
            </Contentbar>
          </Boxed>
          <Boxed>
            <Titlebar id="members">동아리원</Titlebar>
            <Contentbar>
              &gt; 1학년
              <br />
              &gt; 2학년
              <br />
              &gt; 3학년
            </Contentbar>
          </Boxed>
          <Boxed>
            <Titlebar id="projects">프로젝트</Titlebar>
            <Contentbar>
              아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우
            </Contentbar>
          </Boxed>
          <Boxed>
            <Titlebar id="idealTalent">인재상</Titlebar>
            <Contentbar>
              아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우
            </Contentbar>
          </Boxed>
          <Boxed>
            <Titlebar id="Q&A">QnA</Titlebar>
            <Contentbar>
              아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우
            </Contentbar>
          </Boxed>
        </ClubDetails>
        <RecruitmentForm>
          <Not>대동여지도 채용 공고</Not>
          <Recruitment>
            <Notice>
              <NoticeHd>
                <NoticeTitle>프론트엔드</NoticeTitle>
                <NoticeTerm>2024-02-10 까지</NoticeTerm>
              </NoticeHd>
              <Butt onClick={handleCancel}>지원하기</Butt>
            </Notice>
            <Notice>
              <NoticeHd>
                <NoticeTitle>백엔드</NoticeTitle>
                <NoticeTerm>2024-02-10 까지</NoticeTerm>
              </NoticeHd>
              <Butt onClick={handleCancel}>지원하기</Butt>
            </Notice>
            <Notice>
              <NoticeHd>
                <NoticeTitle>안드로이드</NoticeTitle>
                <NoticeTerm>2024-02-10 까지</NoticeTerm>
              </NoticeHd>
              <Butt onClick={handleCancel}>지원하기</Butt>
            </Notice>
          </Recruitment>
        </RecruitmentForm>
      </ClubInfoMain>
      <Footer />
      {isCancel ? (
        <Contain onClick={() => setIsCancel(false)}>
          <Modal>
            <ModalTop1>
              <ModalTop2>
                <Warning>경고</Warning>
                <AUS>정말 지원을 취소하시겠습니까?</AUS>
              </ModalTop2>
            </ModalTop1>
            <ModalBottom>
              <Cancel>취소하기</Cancel>
              <TurnBack onClick={() => setIsCancel(false)}>돌아가기</TurnBack>
            </ModalBottom>
          </Modal>
        </Contain>
      ) : (
        <></>
      )}
      {isLoginVisible && <Login onLoginToggle={handleLoginToggle} />}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

const ClubBanner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333b3d;
  width: 100vw;
  height: 441px;
  color: #fff;
`;

const ClubFrame = styled.div`
  display: flex;
  width: 1159px;
  align-items: center;
  gap: 80px;
`;

const ClubLogo = styled.img`
  width: 300px;
  height: 300px;
  border: none;
`;

const ClubInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 15px;
  width: 100%;
  height: auto;
`;

const ClubName = styled.p`
  font-family: "DXHimchanLight";
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  width: auto;
  line-height: 44px;
`;

const ClubContents = styled.p`
  font-family: "DXHimchanLight";
  font-style: normal;
  font-size: 28px;
  width: auto;
  line-height: 28px;
`;

const ClubTags = styled.div`
  display: flex;
  font-family: "DXHimchanLight";
  font-style: normal;
  font-size: 20px;
  width: auto;
  gap: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: clip;
`;

const ClubTag = styled.p`
  line-height: 20px;
  width: auto;
`;

const ClubInfoHeader = styled.div`
  position: sticky;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 58px;
  border: 1px solid #b0b0b0;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 23px;
  font-family: "DXHimchanLight";
  font-size: 18px;
  width: 1159px;
`;

const ClubIntro = styled.a<{ clubIntro: boolean }>`
  line-height: 18px;
  width: auto;
  color: ${({ clubIntro }) => (clubIntro ? "#000" : "#A1A4A8")};
  &:hover {
    cursor: pointer;
  }
`;

const ClubMembers = styled.a<{ clubMembers: boolean }>`
  line-height: 18px;
  width: auto;
  color: ${({ clubMembers }) => (clubMembers ? "#000" : "#A1A4A8")};
  &:hover {
    cursor: pointer;
  }
`;

const ClubProjects = styled.a<{ clubProjects: boolean }>`
  line-height: 18px;
  width: auto;
  color: ${({ clubProjects }) => (clubProjects ? "#000" : "#A1A4A8")};
  &:hover {
    cursor: pointer;
  }
`;

const IdealTalent = styled.a<{ idealTalent: boolean }>`
  line-height: 18px;
  width: auto;
  color: ${({ idealTalent }) => (idealTalent ? "#000" : "#A1A4A8")};
  &:hover {
    cursor: pointer;
  }
`;

const QuesAndAns = styled.a<{ QnA: boolean }>`
  line-height: 18px;
  width: auto;
  color: ${({ QnA }) => (QnA ? "#000" : "#A1A4A8")};
  &:hover {
    cursor: pointer;
  }
`;

const ClubInfoMain = styled.div`
  display: flex;
  padding: 57px 0px;
  justify-content: center;
  width: 100vw;
  height: auto;
  gap: 25px;
`;

const ClubDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 704px;
  gap: 24px;
  font-family: "DXHimchanLight";
`;

const Boxed = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Titlebar = styled.p`
  font-weight: 700;
  font-size: 22px;
  line-height: 22px;
`;

const Contentbar = styled.p`
  font-family: Sans-serif;
  font-weight: 500;
  font-size: 17px;
  line-height: 17px;
`;

const RecruitmentForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  font-family: "DXHimchanLight";
  color: #000;
`;

const Not = styled.p`
  font-weight: 700;
  font-size: 36px;
  line-height: 36px;
`;

const Recruitment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 30px;
  width: 430px;
`;

const Notice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 12px;
  padding: 23px 55px;
  border: 1px solid #ccc3c3;
  border-radius: 30px;
`;

const NoticeHd = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0;
`;

const NoticeTitle = styled.p`
  font-size: 30px;
  font-weight: 700;
  line-height: 30px;
  width: auto;
`;

const NoticeTerm = styled.p`
  font-size: 11px;
  font-weight: 400;
  width: auto;
  color: #6e6e87;
`;

const Butt = styled.button`
  font-family: "DXHimchanLight";
  font-size: 24px;
  font-weight: 400;
  width: 100%;
  height: 46px;
  color: #fff;
  background-color: #000;
  border: none;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
  }
`;

const Contain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(1px);
`;

const Modal = styled.div`
  width: 352px;
  height: 192px;
  background-color: #fff;
  border-radius: 16px;
`;

const ModalTop1 = styled.div`
  width: 100%;
  height: 144px;
  border-radius: 16px 16px 0px 0px;
  padding: 36px 56px;
  border-left: 2px solid #e1e1e1;
  border-top: 2px solid #e1e1e1;
  border-right: 2px solid #e1e1e1;
`;

const ModalTop2 = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const Warning = styled.p`
  font-family: "DXHimchanLight";
  font-size: 32px;
  font-weight: 700;
  line-height: 32px;
  width: auto;
  color: #ff0000;
`;

const AUS = styled.p`
  font-family: "DXHimchanLight";
  font-size: 22px;
  font-weight: 500;
  line-height: 24px;
  width: auto;
  color: #000;
`;

const ModalBottom = styled.div`
  display: flex;
  width: 100%;
  height: 48px;
  border-radius: 0px 0px 16px 16px;
`;

const Cancel = styled.button`
  width: 176px;
  height: 48px;
  border-left: 2px solid #e1e1e1;
  border-bottom: 2px solid #e1e1e1;
  border-top: 2px solid #e1e1e1;
  border-right: none;
  background-color: #fff;
  border-radius: 0px 0px 0px 16px;
  font-family: "DXHimchanLight";
  font-size: 16px;
  font-weight: 500;
  &:hover {
    cursor: pointer;
  }
`;

const TurnBack = styled.button`
  width: 176px;
  height: 48px;
  border: 2px solid #e1e1e1;
  background-color: #fff;
  border-radius: 0px 0px 16px 0px;
  font-family: "DXHimchanLight";
  font-size: 16px;
  font-weight: 500;
  &:hover {
    cursor: pointer;
  }
`;

export default ClubDetailsInfopage;
