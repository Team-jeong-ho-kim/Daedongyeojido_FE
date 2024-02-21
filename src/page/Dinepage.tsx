import styled from "styled-components";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { postAll, acceptDine } from "../apis/dine";

type dineType = {
  myClub:string;
  messDate:string;
  messId:string;
  messStartTime:number;
  messEndTime:number;
  acceptOrNot:boolean;
}

const Dinepage = () => {
  const [alarmVisible, setAlarmVisible_] = useState(false);
  const [dines, setDines] = useState<dineType[]>();

  useEffect(() => {
    postAll().then((res)=>setDines(res.data)).catch((err)=>console.log(err));
  },[])

  const onAccept = (id:string) => {
    acceptDine(id).then(() => window.location.reload()).catch((err) => console.log(err))
  }

  return (
    <Container>
      <Header setAlarmVisible={setAlarmVisible_} />
      <Title>동아리 회식 관리</Title>
      <Wrapper>
        {dines?.map((element, index) => (
          <DineWrapper key={index}>
            <Club>
              <ClubName>{element.myClub}</ClubName>
              <DineTime>{element.messDate.split('-')[0]}년 {element.messDate.split('-')[1]}월 {element.messDate.split('-')[2]}일 {element.messStartTime}교시 ~ {element.messEndTime}교시 회식 신청</DineTime>
            </Club>
            <Button>
              <AcceptanceBtn onClick={()=>{
                onAccept(element.messId)
              }}>{element.acceptOrNot ? "취소" : "수락"}</AcceptanceBtn>
            </Button>
          </DineWrapper>
        ))}
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 55px;
`;

const Title = styled.p`
  font-size: 48px;
  font-family: "DXhimchanBold";
  margin-right: 1100px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
`;

const DineWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1392px;
  height: 130px;
  padding: 25px 35px 30px 35px;
  border-radius: 10px;
  border: 1px solid rgba(110, 110, 135, 0.5);
`;

const Club = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ClubName = styled.p`
  font-size: 40px;
  font-family: "DXhimchanBold";
`;

const DineTime = styled.p`
  font-size: 24px;
`;

const Button = styled.div`
  display: flex;
  gap: 15px;
`;

const AcceptanceBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 50px;
  background-color: #333b3d;
  border-radius: 8px;
  padding: 12px 44px;
  font-size: 24px;
  color: #ffffff;
  cursor: pointer;
`;

export default Dinepage;
