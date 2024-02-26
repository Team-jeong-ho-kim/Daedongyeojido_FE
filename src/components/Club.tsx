import styled from "styled-components";
import { Edit, Remove } from "../assets";
import { useState } from "react";
import PlusMember from "../components/PlusMember";
import { deleteClub } from "../apis/admin";

type MemberType = {
  userName: string;
  classNumber: string;
  part:
    | "INDEPENDENT"
    | "CLUB_MEMBER"
    | "CLUB_LEADER"
    | "TEACHER"
    | "CLUB_LEADER_TEACHER";
};

type ClubPropsType = {
  clubName: string;
  teacherName: string;
  messCount: number;
  memberResponses: MemberType[];
};

const Club = ({ clubs }: { clubs: ClubPropsType[] | undefined }) => {
  const [plusMemberVisible, setPlusMemberVisible_] = useState<number>(-1);

  const onDelete = (name: string) => {
    if (!window.confirm(`정말 "${name}"동아리를 삭제 하시겠습니까?`)) return;

    deleteClub(name)
      .then(() => window.location.reload())
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      {clubs?.map((element: ClubPropsType, index: number) => (
        <>
          <Border key={index}>
            <ClubWrapper>
              <ClubName>{element.clubName}</ClubName>
              <Detail>
                <ClubDetail>{element.teacherName} 선생님</ClubDetail>
                <ClubDetail>회식 {element.messCount}회</ClubDetail>
              </Detail>
            </ClubWrapper>
            {element.memberResponses.length > 0
              ? element.memberResponses.map((element, index) => (
                  <Member key={index}>
                    <Info>{element.userName}</Info>
                    <Info>{element.classNumber}</Info>
                    <Info>
                      {element.part === "CLUB_MEMBER" ? "동아리원" : "동아리장"}
                    </Info>
                  </Member>
                ))
              : "아직 멤버가 없습니다"}
            <Icons>
              <Icon
                onClick={() => {
                  if (plusMemberVisible >= 0) setPlusMemberVisible_(-1);
                  else setPlusMemberVisible_(index);
                }}
                src={Edit}
              />
              <Icon
                src={Remove}
                onClick={() => {
                  onDelete(element.clubName);
                }}
                style={{ cursor: "pointer" }}
              />
            </Icons>
          </Border>
        </>
      ))}
      {plusMemberVisible >= 0 && clubs && (
        <PlusMember club={clubs[plusMemberVisible]} />
      )}
    </Container>
  );
};

const Container = styled.div`
  margin-top: 50px;
  width: 100%;
  max-width: 1392px;
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
  justify-content: space-between;
`;

const Info = styled.p`
  font-size: 15px;
`;

export default Club;
