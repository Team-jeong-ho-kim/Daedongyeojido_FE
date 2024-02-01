import styled from "styled-components";
import { Edit, Plus, Remove } from "../assets";

const Club = () => {
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
  ];
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
            <Icons>
              <Icon src={Edit} />
              <Icon src={Plus} />
              <Icon src={Remove} />
            </Icons>
          </ClubWrapper>
          <Line></Line>
          <Member>
            <Info>김정호</Info>
            <Info>2210</Info>
            <Info>동아리장</Info>
          </Member>
        </Border>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 360px 360px 360px);
  row-gap: 20px;
  column-gap: 38px;
  justify-content: center;
`;

const Border = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 360px;
  height: 240px;
  border: 1px solid #6e6e87;
  border-radius: 10px;
  padding: 16px 24px;
`;

const ClubWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ClubName = styled.p`
  font-size: 24px;
  font-weight: 700;
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
`;

const ClubDetail = styled.p`
  font-size: 12px;
  font-weight: 400;
`;

const Icons = styled.div`
  display: flex;
  gap: 12px;
  margin-left: 20px;
`;

const Icon = styled.img`
  width: 16px;
  height: 16px;
`;

const Line = styled.div`
  width: 312px;
  height: 1px;
  border: 0.5px solid #cccccc;
`;

const MemberWrapper = styled.div``;

const Member = styled.div`
  display: flex;
  gap: 73px;
`;

const Info = styled.p`
  font-size: 16px;
  font-weight: 400;
`;

export default Club;
