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
  margin-top: 90px;
`;

export const TopText1 = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #626262;
`;

export const TopText2 = styled.div`
  font-size: 22px;
  font-weight: bold;
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
  margin-top: 60px;
`;

export const EggLogo = styled.img`
  width: auto;
  height: auto; 
  position: relative;
  top: -10px; 
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const BottomImage1 = styled.img`
  width: auto; 
  height: auto;
  margin: 60px 10px 10px 10px; 
`;
export const BottomImage2 = styled.img`
  width: auto; 
  height: auto;
  margin: 10px 10px; 
`;