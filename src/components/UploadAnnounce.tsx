import { useState } from "react";
import styled from "styled-components";
import { postAlarm } from "../apis/alarm";

interface AnnounceProps {
  setAnnounceVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

type FormType = {
  title:string;
  contents:string;
}

const UploadAnnounce: React.FC<AnnounceProps> = ({ setAnnounceVisible }) => {
  const [data, setData] = useState<FormType>({
    title:"",
    contents:""
  });

  const onChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value
    })
  }

  const onSubmit = () => {
    postAlarm(data).then(()=>{alert('공지가 성공적으로 등록되었습니다.');window.location.reload()}).catch((err)=>{alert('공지 등록을 실패했습니다.');console.log(err)})
  }

  return (
    <Container>
      <Text>공지사항 등록</Text>
      <Inputs>
        <TitleInput placeholder="공지 제목을 입력해주세요." value={data.title} name="title" onChange={onChange}/>
        <ContentsInput placeholder="공지 내용을 입력해주세요." value={data.contents} name="contents" onChange={onChange}/>
      </Inputs>
      <AnnounceBtn onClick={onSubmit}>공지 등록하기</AnnounceBtn>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 200px;
  left: 640px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 600px;
  height: 500px;
  background-color: #ffffff;
  padding: 32px 24px;
  border-radius: 10px;
  box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.5);
`;

const Text = styled.p`
  font-size: 20px;
  font-family: "DXhimchanBold";
`;

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const TitleInput = styled.input`
  height: 43px;
  font-size: 24px;
  padding: 16px 24px;
  border-radius: 10px;
  border: 1px solid rgba(110, 110, 135, 0.5);
  &::placeholder {
    font-size: 24px;
    color: #6e6e87;
  }
`;

const ContentsInput = styled.textarea`
  height: 286px;
  font-size: 20px;
  padding: 24px;
  border-radius: 10px;
  resize: none;
  border: 1px solid rgba(110, 110, 135, 0.5);
  &::placeholder {
    font-size: 20px;
    color: #6e6e87;
  }
`;

const AnnounceBtn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 35px;
  color: #ffffff;
  border-radius: 8px;
  background-color: #333b3d;
  margin-left: 400px;
`;

export default UploadAnnounce;
