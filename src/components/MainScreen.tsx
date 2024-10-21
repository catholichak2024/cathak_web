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
  height: 100%;
  width: auto;
  background-color: white;
  overflow: hidden;
  position: relative;
  aspect-ratio: 393/852;
  //모바일 환경
  @media only screen and (max-width: 430px) {
    width: 100%;
    height: 100%;
    aspect-ratio: auto;
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
