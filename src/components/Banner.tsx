import { useState, useEffect } from "react";
import styled from "styled-components";
import { LeftArrow, RightArrow } from "../assets";
import axios from "axios";

<<<<<<< Updated upstream
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
=======
interface BannerExplainProps {
  borderIndex: number;
}

interface UrlProps {
  id: number;
  bannerImgUrl: string;
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

  const [img, setImg] = useState(0);
  const [borderIndex, setBorderIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState<UrlProps[]>([]);

  const imgChangeLeft = () => {
    setImg((prevImg) =>
      prevImg > 0 ? prevImg - 1 : currentImage?.length! - 1
    );
    setBorderIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 9));
  };

  const imgChangeRight = () => {
    setImg((prevImg) =>
      prevImg < currentImage?.length! - 1 ? prevImg + 1 : 0
    );
    setBorderIndex((prevIndex) => (prevIndex < 9 ? prevIndex + 1 : 0));
>>>>>>> Stashed changes
  };

  const fetchData = async () => {
    try {
      const response = await axios.post(
        "https://prod-server.xquare.app/jung-ho/main"
      );
      const images = response.data.banners;
      setCurrentImage(images);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const fetchDataAndChangeImage = async () => {
      await fetchData();
      imgChangeRight();
    };

    fetchDataAndChangeImage();

    const intervalId = setInterval(() => {
      fetchDataAndChangeImage();
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Container>
<<<<<<< Updated upstream
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
=======
      <BannerImage src={currentImage?.[img]?.bannerImgUrl} alt="배너이미지" />
      <BannerBar>
        <MoveBanner>
          <NumberWrapper>
            <CurrentNumber>{img + 1}</CurrentNumber>
            <And>/</And>
            <TotalNumber>{currentImage.length}</TotalNumber>
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
>>>>>>> Stashed changes
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
