import styled from 'styled-components';

export const Layout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  background-color: white;
  color: #333;
`;

export const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const MyBigRectangle = styled.div`
  width: 100%;
  height: auto;
  position: relative; 
  display: flex;
  justify-content: center;
  align-items: flex-end; 
`;

export const MainImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  z-index: 1;
  filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.5));
`;

export const MyHayangi = styled.img`
  width: auto; 
  height: auto;
  bottom: 20%;
  position: absolute;
  z-index: 2;
`;

export const NameText = styled.div`
  position: absolute;
  font-size: 18px;
  font-weight: bold;
  color: black;
  bottom: 11%;
  z-index: 2;
`;

export const TextImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 5px;
  margin-top: 5px;
`;

export const MajorText = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: black;
  margin-left: 45px;
`;

export const MyMajorChange = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 45px;
`;

export const Major = styled.div`
  position: absolute;
  top: 55%;
  display: flex;
  justify-content: center;
  padding-bottom: 15px;
  // border-bottom: 1px solid #AED3EC;
  z-index: 4;
`;

export const MajorRectangleContainer = styled.div`
  position: relative;
  width: 325px;
  height: auto;
  overflow: hidden;
`;

export const MajorRectangle = styled.img`
  width: 325px;
  height: auto;
  object-fit: cover;
`;

export const OverlayContainer = styled.div`
  position: absolute;
  top: 10%; 
  left: 4%;
  width: 310px;
  height: 100px;
  display: flex;
  justify-content: space-between; 
  align-items: center; 
  padding: 0 20px;
  overflow: hidden;
  box-sizing: border-box;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const MajorImage1 = styled.img`
  width: auto;
  height: auto;
  object-fit: cover;
`;

export const MajorImage2 = styled.img`
  width: auto;
  height: auto;
  object-fit: cover;
`;


export const MajorText1 = styled.div`
  font-size: 14px;
  font-color: #1A264F;
  font-weight: bold;
  margin-top: 10px;
  text-align: center;
`;

export const MajorText2 = styled.div`
  font-size: 14px;
  margin-top: 5px;
  text-align: center;
  font-color: #1A264F;
  font-weight: bold;
`;

export const Divider = styled.div`
  height: 59px;
  width: 2px;
  background-color: #D6E8F1;
  margin: 0 20px;
`;

export const Account = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  width: 100%;
  top: 75%;
  left: 45px;
`;

export const AccountTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  justify-content: center;
  margin-top: 15px;
`;

export const IdContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 320px;
  position: absolute;
  bottom: 120px; 
  align-items: start;
`;

export const IdText = styled.span`
  font-size: 12px;
  font-weight: 600;
  margin-left: 25.5px;
`;

export const IdNameText = styled.span`
  font-size: 12px;
  z-index: 1;
  margin-right: 30px;
`;

export const Bottom = styled.div`
  position: absolute;
  left: 30px;
  bottom: 30px;
  width: 400px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
`;

export const ImageWrapper = styled.div`
  width: auto;
  margin-bottom: 10px;
`;

export const MyPassword = styled.img`
  width: auto;
  height: auto;
  object-fit: contain;
`;

export const MyDelete = styled.img`
  width: auto;
  height: auto;
  object-fit: contain;
`;

