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
  const [my, setMy] = useState<AlarmProps[]>([]);

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

  const fetchData = async () => {
    await instance
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
      {my.map((alarm) => (
        <AlarmWrapper key={alarm.alarmId}>
          <AlarmTime>{elapsedTime(Date.now())}</AlarmTime>
          {alarm.alarmType === "REPORT_PASS_RESULT" && (
            <>
              {alarm.passingResult === "PASS" ? (
                <>
                  <AlarmTitle>{`${alarm.clubName} 1차 서류 합격 🎉`}</AlarmTitle>
                  <div>
                    <Contents>{`${alarm.userName}님, ${
                      alarm.clubName
                    }의 ${MajorLabel(
                      alarm.major
                    )}분야의 1차 서류 합격을 축하드립니다.`}</Contents>
                    <Button>면접 시간 선택</Button>
                  </div>
                </>
              ) : (
                <>
                  <AlarmTitle>{`${alarm.clubName} 1차 서류 불합격 😢`}</AlarmTitle>
                  <Contents>{`${alarm.userName}님, ${
                    alarm.clubName
                  }의 ${MajorLabel(
                    alarm.major
                  )}분야 1차 서류 불합격하셨습니다.`}</Contents>
                </>
              )}
            </>
          )}
          {alarm.alarmType === "INTERVIEW_PASS_RESULT" && (
            <>
              {alarm.passingResult === "PASS" ? (
                <>
                  <AlarmTitle>{`${alarm.clubName} 최종 합격 🎉`}</AlarmTitle>
                  <div>
                    <Contents>{`${alarm.userName}님, ${
                      alarm.clubName
                    }의 ${MajorLabel(
                      alarm.major
                    )}분야의 최종 합격을 축하드립니다.`}</Contents>
                    <Button>면접 시간 선택</Button>
                  </div>
                </>
              ) : (
                <>
                  <AlarmTitle>{`${alarm.clubName} 최종 불합격 😢`}</AlarmTitle>
                  <Contents>{`${alarm.userName}님, ${
                    alarm.clubName
                  }의 ${MajorLabel(
                    alarm.major
                  )}분야 최종 불합격하셨습니다.`}</Contents>
                </>
              )}
            </>
          )}
          {alarm.alarmType === "MESS_ACCEPT" && (
            <>
              {alarm.contents ? (
                <>
                  <AlarmTitle>{`${alarm.clubName} 회식 수락 🍽️`}</AlarmTitle>
                  <Contents>{`${alarm.userName}님, ${alarm.clubName}의 회식이 수락되었습니다.`}</Contents>
                </>
              ) : (
                <>
                  <AlarmTitle>{`${alarm.clubName} 회식 수락X 😢`}</AlarmTitle>
                  <Contents>{`${alarm.userName}님, ${alarm.clubName}의 회식이 수락되지 않았습니다.`}</Contents>
                </>
              )}
            </>
          )}
        </AlarmWrapper>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 880px;
  padding-top: 45px;
  @media (max-width: 1200px) {
    width: 550px;
  }
  @media (max-width: 850px) {
    width: 350px;
  }
`;

const Title = styled.p`
  font-size: 24px;
`;

const Button = styled.div`
  width: 80px;
  height: 20px;
  background-color: #333b3d;
  border-radius: 5px;
  color: white;
  font-size: 10px;
  font-family: "Pretendard";
`;

const AlarmWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
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
