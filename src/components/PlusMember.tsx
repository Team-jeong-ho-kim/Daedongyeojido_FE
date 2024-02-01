import styled from "styled-components";
import { Edit, Plus, Remove } from "../assets";
import PlusMemberInput from "./PlusMemberInput";

const PlusMember = () => {
  const info = [
    { name: "원은지", classNumber: "2210" },
    { name: "김가은", classNumber: "2210" },
    { name: "변정현", classNumber: "2210" },
    { name: "홍서은", classNumber: "2210" },
    { name: "이영하", classNumber: "2210" },
  ];
  return (
    <Container>
      <Top>
        <Text>
          <ClubName placeholder="동아리 이름" />
          <Teacher placeholder="동아리 담당 선생님" />
        </Text>
        <Icons>
          <Icon src={Edit} />
          <Icon src={Plus} />
          <Icon src={Remove} />
        </Icons>
      </Top>
      <Line></Line>
      <MemberWrapper>
        {info.map((element) => (
          <Member>
            <Delete>-</Delete>
            <NameNumber>{element.name}</NameNumber>
            <NameNumber>{element.classNumber}</NameNumber>
            <Select>
              <Option disabled selected>
                미정
              </Option>
              <Option>동아리장</Option>
              <Option>동아리원</Option>
            </Select>
          </Member>
        ))}
      </MemberWrapper>
      <Bottom>
        <PlusMemberInput />
        <SaveBtn>저장하기</SaveBtn>
      </Bottom>
    </Container>
  );
};
const Container = styled.div`
  position: absolute;
  top: 200px;
  left: 640px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 600px;
  height: 530px;
  background-color: #ffffff;
  padding: 24px 36px;
  border-radius: 10px;
  box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.5);
`;

const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 180px;
`;

const Text = styled.div`
  display: flex;
  gap: 8px;
`;

const ClubName = styled.input`
  width: 140px;
  border: none;
  border-bottom: 1px solid #6e6e87;
  font-size: 24px;
  font-weight: 700;
`;

const Teacher = styled.input`
  width: 110px;
  border: none;
  border-bottom: 1px solid #6e6e87;
  font-size: 12px;
  font-weight: 400;
`;

const Line = styled.div`
  width: 530px;
  height: 1px;
  border: 0.5px solid #cccccc;
  margin-top: -5px;
`;

const Member = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Delete = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #6e6e87;
`;

const NameNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 27px;
  border-radius: 5px;
  border: 1px solid #cccccc;
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

const MemberWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Select = styled.select`
  width: 160px;
  height: 27px;
  border-radius: 5px;
  border: 1px solid #cccccc;
`;

const Option = styled.option``;

const SaveBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 35px;
  padding: 8px 24px;
  border-radius: 8px;
  background-color: #ffb800;
  color: #ffffff;
  font-size: 16px;
  font-weight: 400;
`;

const Bottom = styled.div`
  position: absolute;
  top: 400px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: end;
`;

export default PlusMember;
