import styled from 'styled-components';

const ClubNavigater = () => {
  return (
    <ClubInfoHeader>
      <Wrapper>
        <NavMenu href='#introduction'>동아리 소개</NavMenu>
        <NavMenu href='#members'>동아리원</NavMenu>
        <NavMenu href='#projects'>프로젝트</NavMenu>
        <NavMenu href='#idealTalent'>인재상</NavMenu>
        <NavMenu href='#Q&A'>QnA</NavMenu>
      </Wrapper>
    </ClubInfoHeader>
  );
};

export default ClubNavigater;

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
  font-family: 'DXHimchanLight';
  font-size: 18px;
  width: 1159px;
`;

const NavMenu = styled.a`
  cursor: pointer;
  width: auto;
  line-height: 18px;
  color: '#FFF';
`;
