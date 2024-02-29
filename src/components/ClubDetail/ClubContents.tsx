import { ReactNode } from 'react';
import styled from 'styled-components';

interface IClubContentsProps {
  id: string;
  title: string;
  children: ReactNode;
}

const ClubContents = ({ id, title, children }: IClubContentsProps) => {
  return (
    <Boxed>
      <Titlebar id={id}>{title}</Titlebar>
      <Contentbar>{children}</Contentbar>
    </Boxed>
  );
};

export default ClubContents;

const Boxed = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Titlebar = styled.p`
  font-weight: 700;
  font-size: 22px;
  line-height: 22px;
`;

const Contentbar = styled.p`
  font-family: Sans-serif;
  font-weight: 500;
  font-size: 17px;
  line-height: 17px;
`;
