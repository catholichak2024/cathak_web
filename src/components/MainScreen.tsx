import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/colors';

const PhoneContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PhoneScreen = styled.div`
  width: 100%;
  height: auto;
  max-width: 393px;
  max-height: 852px;
  background-color: white;
  overflow: hidden;
  position: relative;
  aspect-ratio: 393 / 852;
  
  // 화면 비율보다 클 때 스크롤 가능
  @media (max-height: 852px), (max-width: 393px) {
    height: 100%;
    overflow-y: auto;  // 세로 스크롤 가능
  }
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: ${theme.colors.backbasic};
`;

interface SmartphoneScreenProps {
  children: React.ReactNode;
}

const MainScreen: React.FC<SmartphoneScreenProps> = ({ children }) => {
  return (
    <PhoneContainer>
      <PhoneScreen>
        <Content>{children}</Content>
      </PhoneScreen>
    </PhoneContainer>
  );
};

export default MainScreen;
