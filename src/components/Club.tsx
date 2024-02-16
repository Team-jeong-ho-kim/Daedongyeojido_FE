import styled from "styled-components";
import { Edit, Remove } from "../assets";
import { useState } from "react";
import PlusMember from "../components/PlusMember";

interface ClubProps {
  setPlusMemberVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Club: React.FC<ClubProps> = ({ setPlusMemberVisible }) => {
  const [plusMemberVisible, setPlusMemberVisible_] = useState(false);
  const clubs = [
    { clubname: "대동여지도", teacher: "박우빈 선생님", dine: "회식 3회" },
    { clubname: "대동여지도", teacher: "박우빈 선생님", dine: "회식 2회" },
    { clubname: "대동여지도", teacher: "박우빈 선생님", dine: "회식 3회" },
    { clubname: "대동여지도", teacher: "박우빈 선생님", dine: "회식 3회" },
    { clubname: "대동여지도", teacher: "박우빈 선생님", dine: "회식 1회" },
    { clubname: "대동여지도", teacher: "박우빈 선생님", dine: "회식 1회" },
    { clubname: "대동여지도", teacher: "박우빈 선생님", dine: "회식 3회" },
    { clubname: "대동여지도", teacher: "박우빈 선생님", dine: "회식 2회" },
    { clubname: "대동여지도", teacher: "박우빈 선생님", dine: "회식 2회" },
    { clubname: "대동여지도", teacher: "박우빈 선생님", dine: "회식 3회" },
    { clubname: "대동여지도", teacher: "박우빈 선생님", dine: "회식 2회" },
    { clubname: "대동여지도", teacher: "박우빈 선생님", dine: "회식 3회" },
    { clubname: "대동여지도", teacher: "박우빈 선생님", dine: "회식 3회" },
    { clubname: "대동여지도", teacher: "박우빈 선생님", dine: "회식 1회" },
    { clubname: "대동여지도", teacher: "박우빈 선생님", dine: "회식 1회" },
    { clubname: "대동여지도", teacher: "박우빈 선생님", dine: "회식 3회" },
    { clubname: "대동여지도", teacher: "박우빈 선생님", dine: "회식 2회" },
    { clubname: "대동여지도", teacher: "박우빈 선생님", dine: "회식 2회" },
  ];

  const PlusMemberClick = () => {
    setPlusMemberVisible_((prevVisible) => !prevVisible);
  };
  return (
    <Container>
      {clubs.map((element) => (
        <Border>
          <ClubWrapper>
            <ClubName>{element.clubname}</ClubName>
            <Detail>
              <ClubDetail>{element.teacher}</ClubDetail>
              <ClubDetail>{element.dine}</ClubDetail>
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
  display: grid;
  grid-template-columns: repeat(auto-fill, 240px 240px 240px 240px 240px);
  row-gap: 28px;
  column-gap: 48px;
  justify-content: center;
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
  font-weight: 700;
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
