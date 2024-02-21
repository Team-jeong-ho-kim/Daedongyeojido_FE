import styled from "styled-components";
import { MemberPlus } from "../assets";

const PlusMemberInput = () => {
  return (
    <_Container>
      <_NameNumber placeholder="이름" />
      <_NameNumber placeholder="학번" />
      <_Select>
        <_Option disabled selected>
          미정
        </_Option>
        <_Option>동아리장</_Option>
        <_Option>동아리원</_Option>
      </_Select>
      <_PlusIcon src={MemberPlus} />
    </_Container>
  );
};

const _Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 528px;
  height: 47px;
  border-radius: 4px;
  background-color: #cccccc;
`;

const _NameNumber = styled.input`
  width: 150px;
  height: 23px;
  font-size: 16px;
  padding: 12px;
  border: 1px solid rgba(110, 110, 135, 0.5);
  border-radius: 5px;
  &::placeholder {
    font-size: 12px;
    color: #6e6e87;
  }
`;

const _Select = styled.select`
  width: 150px;
  height: 23px;
  border-radius: 5px;
  border: 1px solid rgba(110, 110, 135, 0.5);
  color: #6e6e87;
`;

const _Option = styled.option``;

const _PlusIcon = styled.img`
  width: 16px;
  height: 16px;
`;

export default PlusMemberInput;
