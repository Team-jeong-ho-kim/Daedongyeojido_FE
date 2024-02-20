import styled from "styled-components";

interface AlarmProps {
  setAlarmVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Alarm: React.FC<AlarmProps> = ({ setAlarmVisible }) => {
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
  const alarms = [
    {
      time: elapsedTime(Date.now()),
      title: "공지가 등록되었어요!",
      detail: "{이름}님, {ㅇㅇ선생님}의 공지가 등록되었어요!",
    },
    {
      time: elapsedTime(Date.now()),
      title: "{동아리 이름} 신청 확인 🚀",
      detail: "{이름}님, {동아리 이름}의 {전공} 분야 지원이 완료되었어요!",
    },
    {
      time: elapsedTime(Date.now()),
      title: "{동아리 이름} 면접 안내 ✨",
      detail:
        "{이름}님, {동아리 이름}의 {전공} 분야 면접이 1시간 남았어요! 면접은 {장소}에서 진행되니 늦지 않게 주의해주세요. 🥰",
    },
    {
      time: elapsedTime(Date.now()),
      title: "{동아리 이름} 합격 🎉",
      detail: "{이름}님, {동아리 이름}의 프론트엔드 분야 합격을 축하드려요!",
    },
  ];
  return (
    <Container>
      <AlarmText>알림</AlarmText>
      <AlarmWrappers>
        {alarms.map((element) => (
          <AlarmWrapper>
            <AlarmTime>{element.time}</AlarmTime>
            <AlarmTitle>{element.title}</AlarmTitle>
            <AlarmDetail>{element.detail}</AlarmDetail>
          </AlarmWrapper>
        ))}
      </AlarmWrappers>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 100px;
  right: 260px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 600px;
  height: 680px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.5);
`;

const AlarmText = styled.p`
  padding: 30px 0px 0px 40px;
  font-size: 28px;
  font-family: "DXhimchanBold";
`;

const AlarmWrappers = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const AlarmWrapper = styled.div`
  width: 100%;
  padding: 0px 50px;
  display: flex;
  flex-direction: column;
`;

const AlarmTime = styled.div`
  color: #6e6e87;
  font-size: 12px;
  font-family: "DXhimchanBold";
`;

const AlarmTitle = styled.div`
  font-size: 20px;
  font-family: "DXhimchanBold";
`;

const AlarmDetail = styled.div`
  font-size: 16px;
`;

export default Alarm;
