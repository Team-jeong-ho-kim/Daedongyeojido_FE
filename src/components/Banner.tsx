import { useState, useEffect } from "react";
import styled from "styled-components";
import { LeftArrow, RightArrow } from "../assets";
import { instance } from "../apis/axios";

interface UrlProps {
  id: number;
  bannerImgUrl: string;
  bannerTitle: string;
}

const AdBanner: React.FC = () => {
  const [img, setImg] = useState(0);
  const [currentImage, setCurrentImage] = useState<UrlProps[]>([]);

  const imgChangeLeft = () => {
    setImg((prevImg) =>
      prevImg > 0 ? prevImg - 1 : currentImage?.length! - 1
    );
  };

  const imgChangeRight = () => {
    setImg((prevImg) =>
      prevImg < currentImage?.length! - 1 ? prevImg + 1 : 0
    );
  };

  const changeBannerWithInterval = () => {
    const intervalId = setInterval(() => {
      imgChangeRight();
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  };

  const fetchData = async () => {
    try {
      const response = await instance.get("/main");
      const images = response.data.banners;
      setCurrentImage(images);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
    changeBannerWithInterval();
  }, []);

  return (
    <Container>
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
          {currentImage.map((item, index) => (
            <BannerExplain key={index} $isActive={index === img}>
              {item.bannerTitle}
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
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 64px;
  padding-left: 15%;
  border-bottom: 1px solid #e9ecef;
`;

const MoveBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 120px;
  height: 38px;
  background-color: #333b3d;
  border-radius: 90px;
`;

const NumberWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const CurrentNumber = styled.p`
  color: white;
  font-size: 20px;
  font-family: "DXhimchanLight";
`;

const And = styled.p`
  color: white;
  font-size: 20px;
  font-family: "DXhimchanLight";
`;

const TotalNumber = styled.p`
  color: white;
  font-size: 20px;
  font-family: "DXhimchanLight";
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

const BannerExplain = styled.div<{ $isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 38px;
  border: ${(props) =>
    props.$isActive ? "2px solid #333B3D" : "1px solid #e1e1e1"};
  border-radius: 30px;
  color: #333b3d;
  font-size: 18px;
  font-family: ${(props) =>
    props.$isActive ? "DXhimchanBold" : "DXhimchanMedium"};
`;

export default AdBanner;
