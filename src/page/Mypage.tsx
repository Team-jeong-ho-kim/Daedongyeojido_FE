import styled from "styled-components";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { Profile } from "../assets";
import Footer from "../components/Footer";
import { instance } from "../apis/axios";
import ApplyDetail from "../components/ApplyDetail";
import Alarm from "../components/Alarm";
import Announce from "../components/Annouce";

interface Club {
  name: string;
  myClub: string;
}

const Mypage = () => {
  const [my, setMy] = useState<Club>({
    name: "",
    myClub: "",
  });

  const [activeTab, setActiveTab] = useState<string>("지원내역");
  const [isLoginVisible, setIsLoginVisible] = useState(false);

  const handleLoginToggle = () => {
    setIsLoginVisible(!isLoginVisible);
  };

  const fetchData = async () => {
    const response = await instance
      .post("/user/my-info")
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
      <Header onLoginToggle={handleLoginToggle} />
      <Wrapper>
        <Fixed>
          <MyProfile>
            <Text>
              <Name>{my.name}</Name>
              <MyClub>{my.myClub}</MyClub>
            </Text>
            <ProfileImg src={Profile} />
          </MyProfile>
          <Line></Line>
          <Lists>
            <List
              active={activeTab === "지원내역"}
              onClick={() => setActiveTab("지원내역")}
            >
              지원내역
            </List>
            <List
              active={activeTab === "공지사항"}
              onClick={() => setActiveTab("공지사항")}
            >
              공지사항
            </List>
            <List
              active={activeTab === "알림"}
              onClick={() => setActiveTab("알림")}
            >
              알림
            </List>
          </Lists>
        </Fixed>
        {activeTab === "지원내역" && <ApplyDetail />}
        {activeTab === "공지사항" && <Announce />}
        {activeTab === "알림" && <Alarm />}
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 43px;
`;

const Fixed = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  width: 218px;
  height: 647px;
  border-right: 1px solid #b0b0b0;
  padding-top: 45px;
`;

const MyProfile = styled.div`
  width: 182px;
  display: flex;
  justify-content: space-between;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
`;

const Name = styled.p`
  font-size: 32px;
`;

const MyClub = styled.p`
  font-size: 20px;
  color: #333b3d;
  font-family: "DXhimchanLight";
`;

const ProfileImg = styled.img`
  width: 54px;
  height: 54px;
`;

const Line = styled.div`
  width: 182px;
  height: 1px;
  background-color: #b0b0b0;
`;

const Lists = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const List = styled.p<{ active: boolean }>`
  font-size: 24px;
  font-family: "DXhimchanLight";
  color: ${(props) => (props.active ? "#000000" : "#adb5bd")};
  cursor: pointer;
`;

export default Mypage;
