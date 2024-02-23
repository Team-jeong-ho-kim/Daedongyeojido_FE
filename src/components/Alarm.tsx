import { useEffect, useState } from "react";
import styled from "styled-components";
import { instance } from "../apis/axios";

interface AlarmProps {
  alarmId: string;
  title: string;
  contents: string;
  clubName: string;
  userName: string;
  passingResult: string;
  major: string;
  alarmType: string;
}

const MajorLabel = (major: string) => {
  switch (major) {
    case "FRONT":
      return "프론트엔드";
    case "BACK":
      return "백엔드";
    case "SECURITY":
      return "보안";
    case "IOS":
      return "아이오에스";
    case "AND":
      return "안드로이드";
    case "FLUTTER":
      return "플러터";
    case "EMBEDDED":
      return "임베디드";
    case "AI":
      return "인공지능";
    case "DEVOPS":
      return "데브옵스";
    case "DESIGN":
      return "디자인";
    case "GAME":
      return "게임개발";
    default:
      return "알 수 없음";
  }
};

const Alarm = () => {
  const [my, setMy] = useState<AlarmProps>({
    alarmId: "",
    title: "",
    contents: "",
    clubName: "",
    userName: "",
    passingResult: "",
    major: "",
    alarmType: "",
  });

  const elapsedTime = (date: number): string => {
    const start = new Date(date);
    const end = new Date();

    const seconds = Math.floor((end.getTime() - start.getTime()) / 1000);
    if (seconds < 60) return "방금 전";

    const minutes = seconds / 60;
    if (minutes < 60) return `${Math.floor(minutes)}분 전`;

    const hours = minutes / 60;
    if (hours < 24) return `${Math.floor(hours)}시간 전`;

    const days = hours / 24;
    if (days < 7) return `${Math.floor(days)}일 전`;

    return `${start.toLocaleDateString()}`;
  };

  const renderAlarmContent = (
    alarmType: string,
    passingResult: string,
    clubName: string,
    userName: string,
    major: string,
    title: string,
    contents: string
  ) => {
    switch (alarmType) {
      case "PASS_RESULT":
        return passingResult === "PASS" ? (
          <>
            <AlarmTitle>{`${clubName} 합격 🎉`}</AlarmTitle>
            <Contents>{`${userName}님, ${clubName}의 ${MajorLabel(
              major
            )}분야의 합격을 축하드립니다.`}</Contents>
          </>
        ) : (
          <>
            <AlarmTitle>{`${clubName} 불합격 😢`}</AlarmTitle>
            <Contents>{`${userName}님, ${clubName}의 ${MajorLabel(
              major
            )}분야의 불합격하셨습니다.`}</Contents>
          </>
        );

      case "MESS_ACCEPT":
        return contents ? (
          <>
            <AlarmTitle>{`${clubName} 회식 수락 🍽️`}</AlarmTitle>
            <Contents>{`${userName}님, ${clubName}의 회식이 수락되었습니다.`}</Contents>
          </>
        ) : (
          <>
            <AlarmTitle>{`${clubName} 회식 수락X 😢`}</AlarmTitle>
            <Contents>{`${userName}님, ${clubName}의 회식이 수락되지 않았습니다.`}</Contents>
          </>
        );

      case "ANNOUNCEMENT":
        return (
          <>
            <AlarmTitle>{title}</AlarmTitle>
            <Contents>{contents}</Contents>
          </>
        );

      default:
        return null;
    }
  };

  const fetchData = async () => {
    const response = await instance
      .get("/alarm/my-alarm")
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
      <Title>알림</Title>
      <AlarmWrapper>
        <AlarmTime>{elapsedTime(Date.now())}</AlarmTime>
        {renderAlarmContent(
          my.alarmType,
          my.passingResult,
          my.clubName,
          my.userName,
          my.major,
          my.title,
          my.contents
        )}
      </AlarmWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-top: 45px;
`;

const Title = styled.p`
  font-size: 24px;
`;

const AlarmWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 880px;
  height: 88px;
  padding: 10px 0px;
  border-bottom: 1px solid #ececec;
`;

const AlarmTime = styled.p`
  font-size: 12px;
  color: #6e6e87;
  font-family: "Pretendard";
`;

const AlarmTitle = styled.b`
  font-size: 20px;
  font-family: "Pretendard";
`;

const Contents = styled.p`
  font-size: 16px;
  font-family: "Pretendard";
`;

export default Alarm;
