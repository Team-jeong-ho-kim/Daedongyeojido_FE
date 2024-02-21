import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import React, { useState } from "react";
import { NoneImage } from "../assets"

const CreateClub = () => {
    const [alarmVisible, setAlarmVisible_] = useState(false);
    const [image, setImage] = useState<string | null>(null);

    const handleDragNone = (event: React.DragEvent<HTMLImageElement>) => {
        event.preventDefault();
    };

    const handleImageUpload = () => {
        const fileInput = document.getElementById('fileInput');
        fileInput?.click();
    };

    const handleFileIputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedImage = event.target.files?.[0];
        if (selectedImage) {
            setImage(URL.createObjectURL(selectedImage));
        }
    };

    return (
        <Container>
            <Header 
                setAlarmVisible={setAlarmVisible_}
            />
            <ClubBanner>
                <ClubFrame>
                    {image ? (<ClubLogo src={image} alt="" onDragStart={handleDragNone} onClick={handleImageUpload}/>) : (<NoneImg src={NoneImage} alt="None Image" onDragStart={handleDragNone} onClick={handleImageUpload}/>)}
                    <AddClubLogo type="file" accept="image/*" onChange={handleFileIputChange} id="fileInput"/>
                    <ClubInfo>
                        <ClubName>대동여지도</ClubName>
                        <ClubContents>대마고 동아리 어쩌구 저쩌구</ClubContents>
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
            </ClubBanner>
            <ClubInfoHeader>
                <Wrapper>
                    <ClubIntro>동아리 소개</ClubIntro>
                    <Clubeee>아직 미정</Clubeee>
                    <Clubeee>아직 미정</Clubeee>
                    <Clubeee>아직 미정</Clubeee>
                    <Clubeee>아직 미정</Clubeee>
                </Wrapper>
            </ClubInfoHeader>
            <PostFrame>
                <Save>
                    <SaveChanges>저장하기</SaveChanges>
                </Save>
                <ClubInfoDetails placeholder="본문을 입력해주세요."/>
            </PostFrame>
            <Footer />
        </Container>
    )
}

const Container = styled.div`
position: relative;
`;

const ClubBanner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333B3D;
  width: 100vw;
  height: 441px;
  color: #fff;
`;

const ClubFrame = styled.div`
  display: flex;
  width: 1392px;
  align-items: center;
  gap: 80px;
`;

const ClubLogo = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border: 1px solid #989898;
  transition: border-radius 0.2s;
  &:hover {
    cursor: pointer;
    border-radius: 50%;
  }
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
  font-family: "DXHimchanLight";
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  width: auto;
  line-height: 44px;
`;

const ClubContents = styled.p`
  font-family: "DXHimchanLight";
  font-style: normal;
  font-size: 28px;
  width: auto;
  line-height: 28px;
`;

const ClubTags = styled.div`
  display: flex;
  font-family: "DXHimchanLight";
  font-style: normal;
  font-size: 20px;
  width: auto;
  gap: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: clip;
`

const ClubTag = styled.p`
  line-height: 20px;
  width: auto;
`;

const ClubInfoHeader = styled.div`
  display: flex;
  width: 100vw;
  height: 58px;
  padding: 20px 264px;
  border: 1px solid #B0B0B0;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 23px;
  font-family: "DXHimchanLight";
  font-size: 18px;
`;

const ClubIntro = styled.a`
  line-height: 18px;
  width: auto;
  color: #000;
  &:hover {
    cursor: pointer;
  }
`;

const Clubeee = styled.a`
  line-height: 18px;
  width: auto;
  color: #A1A4A8;
  &:hover {
    cursor: pointer;
  }
`;

const PostFrame = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px 0px 50px;
  gap: 25px;
`;

const AddClubLogo = styled.input`
  display: none;
`;

const NoneImg = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border: 1px solid #989898;
  transition: border-radius 0.2s;
  &:hover {
    cursor: pointer;
    border-radius: 50%;
  }
`;

const SaveChanges = styled.button`
  padding: 7px 26px;
  margin-right: 10px;
  width: 100px;
  height: 30px;
  background: #B0B0B0;
  border-radius: 10px;
  border: none;
  font-family: "DXHimchanLight";
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: #FFFFFF;
  transition: box-shadow 0.1s;
  &:hover {
    cursor: pointer;
    box-shadow: 1px 1px 3px #000000;
  }
`;

const Save = styled.div`
  width: 1392px;
  height: 30px;
  display: flex;
  justify-content: flex-end;
`;

const ClubInfoDetails = styled.textarea`
  padding: 35px 35px;
  gap: 10px;
  width: 1392px;
  height: 723px;
  border: 1px solid #9E9E9E;
  border-radius: 10px;
  font-family: "DXHimChanLight";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  resize: none;
  &:hover {
    cursor: text;
  }
`;


export default CreateClub;