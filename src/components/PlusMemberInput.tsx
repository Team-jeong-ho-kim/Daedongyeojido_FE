import styled from "styled-components";
import { MemberPlus } from "../assets";

const PlusMemberInput = () => {
  return (
    <Container>
      <NameNumber placeholder="이름" />
      <NameNumber placeholder="학번" />
      <Select>
        <Option disabled selected>
          미정
        </Option>
        <Option>동아리장</Option>
        <Option>동아리원</Option>
      </Select>
      <PlusIcon src={MemberPlus} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 528px;
  height: 47px;
  border-radius: 4px;
  background-color: #cccccc;
`;

const NameNumber = styled.input`
  width: 150px;
  height: 23px;
  font-size: 16px;
  font-weight: 400;
  padding: 12px;
  border: 1px solid rgba(110, 110, 135, 0.5);
  border-radius: 5px;
  &::placeholder {
    font-size: 12px;
    font-weight: 500;
    color: #6e6e87;
  }
`;

const Select = styled.select`
  width: 150px;
  height: 23px;
  border-radius: 5px;
  border: 1px solid rgba(110, 110, 135, 0.5);
  color: #6e6e87;
`;

const Option = styled.option``;

const PlusIcon = styled.img`
  width: 16px;
  height: 16px;
`;

export default PlusMemberInput;
