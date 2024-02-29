import { ReactNode } from 'react';
import styled from 'styled-components';

interface IClubContentsItemProps {
  id: string;
  title: string;
  rightButtonTitle?: string;
  onClick?: () => void;
  children: ReactNode;
}

const ClubContentsItem = ({
  id,
  title,
  rightButtonTitle,
  onClick,
  children,
}: IClubContentsItemProps) => {
  return (
    <Boxed>
      <Titlebar id={id}>
        <TItle>{title}</TItle>
        {rightButtonTitle && (
          <Button onClick={onClick}>{rightButtonTitle}</Button>
        )}
      </Titlebar>
      <Contentbar>{children}</Contentbar>
    </Boxed>
  );
};

export default ClubContentsItem;

const Boxed = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Titlebar = styled.div`
  display: flex;
  gap: 20px;
`;

const TItle = styled.span`
  font-weight: 700;
  font-size: 24px;
  line-height: 22px;
`;

const Contentbar = styled.p`
  font-family: Sans-serif;
  font-weight: 500;
  font-size: 17px;
  line-height: 17px;
`;

const Button = styled.button`
  cursor: pointer;
  width: 120px;
  height: 30px;
  color: white;
  font-size: 18px;
  background-color: #333b3d;
  border-radius: 6px;
`;
