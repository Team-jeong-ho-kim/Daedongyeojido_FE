import styled from "styled-components";
import { useEffect, useState } from "react";
import { Up, Down } from "../assets";
import { instance } from "../apis/axios";

interface announce {
  announcement: {
    title: string;
    contents: string;
  }[];
}

const Announce = () => {
  const [readStates, setReadStates] = useState<boolean[]>(Array(4).fill(false));

  const [checkColors, setCheckColors] = useState<string[]>(
    Array(4).fill("black")
  );
  const [my, setMy] = useState<announce>({
    announcement: [],
  });

  const toggleReadState = (index: number) => {
    setReadStates((prevReadStates) => {
      const newReadStates = [...prevReadStates];
      newReadStates[index] = !newReadStates[index];
      return newReadStates;
    });

    if (!readStates[index]) {
      setCheckColors((prevCheckColors) => {
        const newCheckColors = [...prevCheckColors];
        newCheckColors[index] = "#B0B0B0";
        return newCheckColors;
      });
    }
  };

  const fetchData = async () => {
    const response = await instance
      .post("/alarm/announcement")
      .then((res) => {
        setMy(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <Title>공지사항</Title>
      <Wrapper>
        {my.announcement &&
          my.announcement.map((announce, index) => (
            <Announces key={index} isRead={readStates[index]}>
              <AnnounceWrapper>
                <AnnounceLeft>
                  <Check
                    isRead={readStates[index]}
                    checkColor={checkColors[index]}
                  ></Check>
                  <AnnounceTitle>{announce.title}</AnnounceTitle>
                </AnnounceLeft>
                <ArrowIcon
                  src={readStates[index] ? Up : Down}
                  onClick={() => toggleReadState(index)}
                />
              </AnnounceWrapper>
              {readStates[index] && <Contents>{announce.contents}</Contents>}
            </Announces>
          ))}
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 880px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-top: 45px;
  @media (max-width: 1200px) {
    width: 550px;
  }
  @media (max-width: 850px) {
    width: 350px;
  }
`;

const Title = styled.p`
  font-size: 24px;
`;

const Wrapper = styled.div``;

const Announces = styled.div<{ isRead: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 880px;
  height: ${(props) => (props.isRead ? "270px" : "50px")};
  border-bottom: 1px solid #ececec;
  padding: 15px 15px;
  &:hover {
    background-color: ${(props) => (props.isRead ? "#FFFFFF" : "#F4F4F4")};
  }
  @media (max-width: 1200px) {
    width: 550px;
  }
  @media (max-width: 850px) {
    width: 350px;
  }
`;

const AnnounceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 850px;
`;

const AnnounceLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Check = styled.div<{ isRead: boolean; checkColor: string }>`
  width: 8px;
  height: 8px;
  border-radius: 50px;
  background-color: ${(props) => props.checkColor};
`;

const AnnounceTitle = styled.p`
  font-size: 20px;
`;

const ArrowIcon = styled.img`
  width: 12px;
  height: 6px;
`;

const Contents = styled.div`
  font-size: 20px;
  font-family: "Pretendard";
`;

export default Announce;
