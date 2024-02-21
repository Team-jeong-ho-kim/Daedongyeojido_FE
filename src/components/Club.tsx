import styled from "styled-components";
import { Edit, Remove } from "../assets";
import { useState } from "react";
import PlusMember from "../components/PlusMember";

interface ClubProps {
  setPlusMemberVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

type MemberType = {
  userName: String;
  classNumber: String;
  part: "INDEPENDENT" | "CLUB_MEMBER" | "CLUB_LEADER" | "TEACHER" | "CLUB_LEADER_TEACHER"
}

type ClubPropsType = {
  clubName: string;
  teacherName: string;
  messCount: number;
  memberResponses: MemberType[];
}

const Club = ({ clubs }:{clubs:ClubPropsType[] | undefined;}) => {
  const [plusMemberVisible, setPlusMemberVisible_] = useState(false);

  const PlusMemberClick = () => {
    setPlusMemberVisible_((prevVisible) => !prevVisible);
  };
  return (
    <Container>
      {clubs?.map((element:ClubPropsType, index:number) => (
        <Border key={index}>
          <ClubWrapper>
            <ClubName>{element.clubName}</ClubName>
            <Detail>
              <ClubDetail>{element.teacherName} 선생님</ClubDetail>
              <ClubDetail>회식 {element.messCount}회</ClubDetail>
            </Detail>
          </ClubWrapper>
          <Member>
            <Info>김정호</Info>
            <Info>2210</Info>
            <Info>동아리장</Info>
          </Member>
          <Icons>
            <Icon onClick={PlusMemberClick} src={Edit} />
            <Icon src={Remove} />
          </Icons>
        </Border>
      ))}
      {plusMemberVisible && (
        <PlusMember setPlusMemberVisible={setPlusMemberVisible_} />
      )}
    </Container>
  );
};

const Container = styled.div`
  margin-top:50px;
  width:100%;
  max-width:1392px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  justify-items: center;
  justify-content: start;
  gap: 48px;
`;


const Border = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 240px;
  height: 350px;
  border: 1px solid #333b3d;
  border-radius: 10px;
  padding: 20px;
`;

const ClubWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ClubName = styled.p`
  font-size: 32px;
  font-family: "DXhimchanBold";
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
`;

const ClubDetail = styled.p`
  font-size: 12px;
`;

const Icons = styled.div`
  display: flex;
  justify-content: end;
  align-items: flex-end;
  gap: 5px;
  margin-top: auto;
`;

const Icon = styled.img`
  width: 14px;
  height: 14px;
`;

const Member = styled.div`
  display: flex;
  gap: 50px;
`;

const Info = styled.p`
  font-size: 15px;
`;

export default Club;
