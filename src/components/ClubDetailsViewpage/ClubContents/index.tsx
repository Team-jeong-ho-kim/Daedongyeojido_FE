import styled from 'styled-components';
import ClubContentsItem from './ClubContentsItem';
import { useAuth } from '../../../hooks/useAuth';

const ClubContents = () => {
  const DUMMY_DATA =
    '아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우아에이오우';
  return (
    <ClubDetails>
      <Stack>
        <Button>수정하기</Button>
      </Stack>
      <ClubContentsItem id='introduction' title='동아리 소개'>
        {DUMMY_DATA}
      </ClubContentsItem>
      <ClubContentsItem id='members' title='동아리원'>
        &gt; 1학년
        <br />
        &gt; 2학년
        <br />
        &gt; 3학년
      </ClubContentsItem>
      <ClubContentsItem id='projects' title='프로젝트'>
        {DUMMY_DATA}
      </ClubContentsItem>
      <ClubContentsItem id='idealTalent' title='인재상'>
        {DUMMY_DATA}
      </ClubContentsItem>
      <ClubContentsItem
        id='Q&A'
        title='QnA'
        rightButtonTitle={useAuth('INDEPENDENT') ? '질문하기' : '답변하기'}
      >
        {DUMMY_DATA}
      </ClubContentsItem>
    </ClubDetails>
  );
};

export default ClubContents;

const ClubDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 704px;
  gap: 24px;
  font-family: 'DXHimchanLight';
`;

const Stack = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const Button = styled.button`
  width: 80px;
  height: 30px;
  color: white;
  background-color: black;
  border-radius: 5px;
`;
