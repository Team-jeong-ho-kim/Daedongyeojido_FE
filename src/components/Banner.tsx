import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  Banner1,
  Banner2,
  Banner3,
  Banner4,
  Banner5,
  Banner6,
  LeftArrow,
  RightArrow,
} from "../assets";

interface BannerExplainProps {
  borderIndex: number;
}

const AdBanner: React.FC = () => {
  const banners = [
    { explain: "1번배너소개" },
    { explain: "2번배너소개" },
    { explain: "3번배너소개" },
    { explain: "4번배너소개" },
    { explain: "5번배너소개" },
    { explain: "6번배너소개" },
    { explain: "7번배너소개" },
    { explain: "8번배너소개" },
    { explain: "9번배너소개" },
    { explain: "10번배너소개" },
  ];

  const [img, setImg] = useState(1);
  const [borderIndex, setBorderIndex] = useState(0);
  const images = [Banner1, Banner2, Banner3, Banner4, Banner5, Banner6];

  const imgChangeLeft = () => {
    setImg((prevImg) => (prevImg > 1 ? prevImg - 1 : 6));
    setBorderIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 9));
  };

  const imgChangeRight = () => {
    setImg((prevImg) => (prevImg < 6 ? prevImg + 1 : 1));
    setBorderIndex((prevIndex) => (prevIndex < 9 ? prevIndex + 1 : 0));
  };

  useEffect(() => {
    const intervalId = setInterval(imgChangeRight, 5000);

    imgChangeLeft();

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const currentImage = images[img - 1];

  return (
    <Container>
      <BannerImage src={currentImage} alt="배너이미지" />
      <BannerBar>
        <MoveBanner>
          <NumberWrapper>
            <CurrentNumber>{img}</CurrentNumber>
            <And>/</And>
            <TotalNumber>10</TotalNumber>
          </NumberWrapper>
          <ArrowImg src={LeftArrow} onClick={imgChangeLeft} alt="왼쪽 화살표" />
          <ArrowImg
            src={RightArrow}
            onClick={imgChangeRight}
            alt="오른쪽 화살표"
          />
        </MoveBanner>
        <ExplainWrapper>
          {banners.map((element) => (
            <BannerExplain borderIndex={borderIndex}>
              <p>{element.explain}</p>
            </BannerExplain>
          ))}
        </ExplainWrapper>
      </BannerBar>
    </Container>
  );
};

const Container = styled.div``;

const BannerImage = styled.img`
  position: relative;
  width: 100%;
  height: 335px;
`;

const BannerBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 64px;
  border-bottom: 1px solid #e9ecef;
`;

const MoveBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  width: 150px;
  height: 38px;
  background-color: #000000;
  opacity: 0.4;
  border-radius: 90px;
`;

const NumberWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const CurrentNumber = styled.p`
  color: white;
  font-size: 20px;
  font-weight: 300;
`;

const And = styled.p`
  color: white;
  font-size: 20px;
  font-weight: 300;
`;

const TotalNumber = styled.p`
  color: white;
  font-size: 20px;
  font-weight: 300;
`;

const ArrowImg = styled.img`
  width: 7px;
  height: 14px;
  cursor: pointer;
`;

const ExplainWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const BannerExplain = styled.div<BannerExplainProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 38px;
  border: 1px solid #e1e1e1;
  border-radius: 30px;
  color: #333b3d;
  font-size: 18px;
  font-weight: 500;
`;

export default AdBanner;
