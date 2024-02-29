import { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Login from '../components/Login';
import ClubBanner from '../components/ClubDetail/ClubBanner';
import ClubNavigater from '../components/ClubDetail/ClubNavigater';
import ClubContents from '../components/ClubDetail/ClubContents';
import RecruitmentCard from '../components/ClubDetail/RecruitmentCard';

const ClubDetailsInfopage = () => {
  const [isCancel, setIsCancel] = useState<boolean>(false);
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const DUMMY_DATA =
    '아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우';

  const handleLoginToggle = () => {
    setIsLoginVisible(!isLoginVisible);
  };

  const handleCancel = () => {
    setIsCancel(!isCancel);
  };

  return (
    <Container>
      <Header onLoginToggle={handleLoginToggle} />
      <ClubBanner />
      <ClubNavigater />

      <ClubInfoMain>
        <ClubDetails>
          <ClubContents id='introduction' title='동아리 소개'> {DUMMY_DATA} </ClubContents>
          <ClubContents id='members' title='동아리원'>
            &gt; 1학년
            <br />
            &gt; 2학년
            <br />
            &gt; 3학년
          </ClubContents>
          <ClubContents id='projects' title='프로젝트'> {DUMMY_DATA} </ClubContents>
          <ClubContents id='idealTalent' title='인재상'> {DUMMY_DATA} </ClubContents>
          <ClubContents id='Q&A' title='QnA'> {DUMMY_DATA} </ClubContents>
        </ClubDetails>

        <RecruitmentForm>
          <Not>대동여지도 채용 공고</Not>
          <Recruitment>
            <RecruitmentCard title='프론트엔드' turm='2024-2-10' />
            <RecruitmentCard title='백엔드' turm='2024-2-10' />
            <RecruitmentCard title='안드로이드' turm='2024-2-10' />
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
  font-family: 'DXHimchanLight';
`;

const RecruitmentForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  font-family: 'DXHimchanLight';
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
  font-family: 'DXHimchanLight';
  font-size: 32px;
  font-weight: 700;
  line-height: 32px;
  width: auto;
  color: #ff0000;
`;

const AUS = styled.p`
  font-family: 'DXHimchanLight';
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
  font-family: 'DXHimchanLight';
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
  font-family: 'DXHimchanLight';
  font-size: 16px;
  font-weight: 500;
  &:hover {
    cursor: pointer;
  }
`;

export default ClubDetailsInfopage;
