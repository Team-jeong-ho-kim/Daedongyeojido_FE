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

const AdBanner: React.FC = () => {
  const [img, setImg] = useState(1);
  const [display, setDisplay] = useState("none");
  const images = [Banner1, Banner2, Banner3, Banner4, Banner5, Banner6];

  const imgChangeLeft = () => {
    setImg((prevImg) => (prevImg > 1 ? prevImg - 1 : 6));
  };

  const imgChangeRight = () => {
    setImg((prevImg) => (prevImg < 6 ? prevImg + 1 : 1));
  };

  const buttonDisplayOn = () => {
    setDisplay("block");
  };

  const buttonDisplayOff = () => {
    setDisplay("none");
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
      {/* 배너 영역 */}
      <BannerWrapper
        onMouseOver={buttonDisplayOn}
        onMouseOut={buttonDisplayOff}
      >
        <BannerImage src={currentImage} alt="배너이미지" />
        <LeftArrowButton onClick={imgChangeLeft} style={{ display }}>
          <img src={LeftArrow} alt="왼쪽 화살표" />
        </LeftArrowButton>
        <RightArrowButton onClick={imgChangeRight} style={{ display }}>
          <img src={RightArrow} alt="오른쪽 화살표" />
        </RightArrowButton>
      </BannerWrapper>
    </Container>
  );
};

const Container = styled.div``;

const BannerWrapper = styled.div``;

const LeftArrowButton = styled.div`
  position: absolute;
  top: 290px;
  left: 0px;
  width: 55px;
  height: 110px;
  background-color: #6e6e87;
  opacity: 0.36;
  padding: 35px 16px;
  > img {
    width: 20px;
    height: 40px;
  }
`;

const RightArrowButton = styled.div`
  position: absolute;
  top: 290px;
  right: 0px;
  width: 55px;
  height: 110px;
  background-color: #6e6e87;
  opacity: 0.36;
  padding: 35px 16px;
  > img {
    width: 20px;
    height: 40px;
  }
`;

const BannerImage = styled.img`
  position: relative;
  width: 100%;
  height: 360px;
`;

export default AdBanner;
