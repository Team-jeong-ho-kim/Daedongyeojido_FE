import styled from 'styled-components';

interface IRecruitmentCardProps {
  title: string;
  turm: string;
}

const RecruitmentCard = ({ title, turm }: IRecruitmentCardProps) => {
  return (
    <Container>
      <Stack>
        <NoticeTitle>{title}</NoticeTitle>
        <NoticeTerm>{turm} 까지</NoticeTerm>
      </Stack>
      <RecruitmentButton onClick={() => {}}>지원하기</RecruitmentButton>
    </Container>
  );
};

export default RecruitmentCard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 12px;
  padding: 23px 55px;
  border: 1px solid #ccc3c3;
  border-radius: 30px;
`;

const Stack = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
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

const RecruitmentButton = styled.button`
  font-family: 'DXHimchanLight';
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
