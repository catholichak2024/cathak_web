import styled from 'styled-components';

export const Layout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  width:
  background-color: white;
  color: #333;
`;

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const TopText1 = styled.div`
  font-size: 18px;
  color: #626262;
`;

export const TopText2 = styled.div`
  font-size: 22px;
  color: #1A264F;
  margin-top: 10px;
  text-align: center;
  line-height: 1.2;
`;

export const Middle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const EggLogo = styled.img`
  width: auto;
  height: 300px; 
  position: relative;
  top: -10px; 
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const BottomImage = styled.img`
  width: 150px; 
  height: auto;
  margin: 0 10px; 
`;