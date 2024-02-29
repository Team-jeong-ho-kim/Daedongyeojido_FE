import styled from 'styled-components';
import { LogoWhite } from '../../assets';

const ClubBanner = () => {
  return (
    <Container>
      <ClubFrame>
        <ClubLogo src={LogoWhite} alt='로고' />
        <ClubInfo>
          <ClubName>대동여지도</ClubName>
          <ClubDetail>대마고 동아리 어쩌구 저쩌구</ClubDetail>
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
    </Container>
  );
};

export default ClubBanner;

const Container = styled.div`
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
  font-family: 'DXHimchanLight';
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  width: auto;
  line-height: 44px;
`;

const ClubDetail = styled.p`
  font-family: 'DXHimchanLight';
  font-style: normal;
  font-size: 28px;
  width: auto;
  line-height: 28px;
`;

const ClubTags = styled.div`
  display: flex;
  font-family: 'DXHimchanLight';
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
