import styled from 'styled-components';
import RecruitmentCard from './RecruitmentCard';

const Recruitment = () => {
  return (
    <RecruitmentForm>
      <Not>대동여지도 채용 공고</Not>
      <Stack>
        <RecruitmentCard title='프론트엔드' turm='2024-2-10' />
        <RecruitmentCard title='백엔드' turm='2024-2-10' />
        <RecruitmentCard title='안드로이드' turm='2024-2-10' />
        <ButtonWrapper>
          <Button>공고 추가하기</Button>
          <Button>지원서 작성</Button>
        </ButtonWrapper>
      </Stack>
    </RecruitmentForm>
  );
};

export default Recruitment;

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

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 30px;
  width: 430px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Button = styled.button`
  cursor: pointer;
  width: 45%;
  height: 40px;
  border-radius: 10px;
  font-size: 24px;
  color: white;
  background-color: black;
`;
