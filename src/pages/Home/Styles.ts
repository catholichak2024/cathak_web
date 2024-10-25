import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  background-color: backbasic;
  color: #333;

  h1 {
    font-size: 2.5rem;
    margin: 0;
    padding: 20px;
    text-align: center;
  }
`;

export const Top = styled.div`
  width: 100%;
  height: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HomeRectangleImage = styled.img`
  width: 100%;
  height: 80%;
  object-fit: cover;
`;

export const HomeEllipseImage = styled.img`
  position: absolute;
  top: 10%; 
  left: 50%;
  transform: translateX(-50%);
  object-fit: cover;
  z-index:2
`;

export const HomeMascotImage = styled.img`
  position: absolute;
  top: 8%;            
  left: 25%;
  transform: translate(-50%, -50%); 
  cursor:pointer;
`;

export const Detail = styled.div`
  position: absolute;
  top: 68%;
  left: 15%;
  width: 70%;
  height: 90px;
  display: flex;
  justify-content: center;
  magin: 10px;
  z-index: 4;
`;

export const Image = styled.img`
  top:40%;
  width: 80%;
  height: 30%
  height: auto;
  object-fit: cover;
`;

export const TextOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 10;
  width: 90%;
  height: 100%;
  display: flex;
  magin: 20px;
  justify-content: space-around;
  align-items: center;
  z-index: 1;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  span {
    font-size: 14px;
    color: #1A264F;
  }

  span:last-child {
    font-size: 17px;
    font-weight: bold;
  }
`;

export const Line = styled.div`
  width: 2px;   
  height: 45px; 
  background-color: #D6E8F1; 
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start; 
  width: 100%;
  margin-left: 80px; 
  margin-top:20px;
`;

export const HomeGradeManage = styled.img`
  width:  80px;
  height: 20px;  
  margin-top:30px;      
`;


export const Middle = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HomeHapRectangle1Container = styled.div`
  position: relative;
  right: 1.5%;  
  width: 77%;
`;

export const HomeHapRectangle1 = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const HomeHapRectangle2Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  height: auto;
`;

export const HomeHapRectangle2Block = styled.div`
  position: relative;
  width: 48%;
  max-width: 240px;
`;

export const HomeHapRectangle2 = styled.img`
  width: 130px;
  height: auto;
  margin: 0;
  margin-bottom: 36px;
`;

export const TextWithIcon = styled.div`
  display: flex;
  align-items: center;  
  position: absolute;
  top: 20px; 
  left: 21px; 
  font-size: 10px;
  color: #1A264F;
  font-weight: bold;

  img {
    margin-right: 5px; 
    width: 12px; 
    height: 12px;
  }
`;

export const LargeTextWithIcon = styled(TextWithIcon)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: absolute;
  top: 35px; 
  left:40px; 
  font-size: 13px;  
  color: #1A264F;
  font-weight: bold;

  img {
    margin-right: 5px; 
    width: 13.5px; 
    height: 13.5px;
  }
`;

export const LargeNumber = styled.span`
  font-size: 45px; 
  font-weight: 400;
  color: #1A264F;
`;

export const TotalGradeText = styled.div`
  display: flex;
  flex-direction: Row;
  align-items: center;
  position: absolute;
  top:1px; 
  left: 12px;
  text-align: center;
  

  img {
    margin-left: 9px; 
    width:105px;
    height: 105px
  }
`;

export const SmallNumber = styled.span`
  font-size: 16px;
  font-weight: 380;
  color: #1A264F;
  margin-left: 5px;
  margin-top: 57px; 
`;

export const LargeNumber2 = styled.span`
  font-size: 30px; 
  font-weight: 400;  
  color: #626262; 
  margin-top: 35px; 
  margin-left: 20px;
`;

export const SmallNumber2 = styled.span`
  font-size: 16px;
  font-weight: 380;
  color: #626262;
  margin-left: 3px;
  margin-top: 60px;  
`;