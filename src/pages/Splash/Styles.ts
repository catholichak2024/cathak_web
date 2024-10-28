import styled from 'styled-components';

export const Layout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Logo = styled.div`
  margin-top: 160px;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainText = styled.div`
  color: #1A264F;
  font-size: 22px;
  font-weight: 600;
  position: absolute;
  top: 44.5%;
  margin-bottom: 5%;
`;

export const SubText = styled.div`
  color: #626262;
  font-size: 18px;
  position: absolute;
  top: calc(50% + 15px); 
  font-weight: 500;
`;