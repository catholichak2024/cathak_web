import styled from 'styled-components';

export const Layout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-content: flex-start;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
  color: #333;
`;

export const Top = styled.div`
  background-color: #d6e8f1;
  border-bottom-left-radius: 80px;
  border-bottom-right-radius: 80px;
  padding: 8px; 
  box-shadow: 0 4px 10px #1a264f; 
  align-items: center;
  justify-content: center;
  width: 100%; 
  height: 320px;
`;
export const HayangiBox = styled.div`
  position: relative;      
  margin-left: 100px;
  margin-top: 70px;    
  font-weight: bold;    
`;
export const UserName = styled.div`
  font-size: 17px;        
  margin: 0px;              
  color: #333;    
  font-weight: bold; 
  margin-top: 10px; 
  margin-left: 170px;   
`;

export const Middle = styled.div`
  position: absolute;
  top: 70%;              
  left: 50%;
  transform: translate(-50%, -48%);
  display: flex;
  width: 80%;
  align-items: center;
`;

export const Bottom = styled.div`
    align-items: center; 
    justify-content: center;
    position: relative; 
    width: 100%; 
    height: 320px;
    display: flex;
    flex-direction: column;
`;

export const MajorBold = styled.div`
  font-size: 17px;        
  margin: 50px;              
  color: #333; 
  transform: translate(-170%, -1100%);   
  font-weight: bold;    
`;

export const AccountBold = styled.div`
  font-size: 17px;               
  color: #333; 
  transform: translate(-50%, 130%);  
  margin-left: -250px; 
  font-weight: bold;    
`;

export const GrandGoto = styled.div`
  position: absolute;
  top: 8%;            
  left: 50%;
  transform: translate(280%, -380%); 
  cursor:pointer;
`;

export const MyIdBox = styled.div`
  position: absolute;
  top: 70%;              
  left: 50%;
  transform: translate(-50%, -52%);
  display: flex;
  width: 80%;
  align-items: center;
  gap: 220px;
`;

export const IdInfoText = styled.div`
  font-size: 12px;                
  color: #626262;   
  font-weight: bold;    
`;

export const IdInfo = styled.div`
  font-size: 10px;                
  color: #626262;   
  font-weight: bold;    
`;

export const exitMember = styled.div`
  position: absolute;
  top: 110%;            
  left: 10%;
  transform: translate(0%, -380%); 
  cursor:pointer;   
`;

export const passwordBox = styled.div`
  position: absolute;
  top: 100%;            
  left: 10%;
  transform: translate(0%, -380%); 
  cursor:pointer;
`;

export const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const PopupContent = styled.div<{ type: string }>` 
  background: white;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
  width: 320px;
  height: 194px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PopupTitle = styled.h2<{ type: string }>`
  margin: 0;
  font-size: 18px;
  color: ${({ type }) => type === 'delete' ? '#FF3B3B' : 'black'};  
`;

export const PopupDescription = styled.p`
  margin: 5px 0 10px; 
  font-size: 14px;
  color: #626262
`;

export const ButtonContainer = styled.div`
  justify-content: center;
  width: auto;
  margin-top: 10px;
  margin-right: 2px;
`;

export const CloseButton = styled.button<{ type: string }>`
  background-color: #F1F1F1;
  border: none;
  width: 106px;
  height: 38px;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 8px;
  right: 10%;

  &:hover {
    background-color: ${({ type }) => type === 'delete' ? '#FF3B3B' : '#D6E8F1'}; 
    color: ${({ type }) => type === 'delete' ? 'white' : 'black'};
  }
`;

export const ConfirmButton = styled.button<{ type: string }>`
  background-color: #F1F1F1; 
  border: none;
  width: 106px;
  height: 38px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 8px;

  &:hover {
    background-color: ${({ type }) => type === 'delete' ? '#FF3B3B' : '#D6E8F1'}; 
    color: ${({ type }) => type === 'delete' ? 'white' : 'black'};
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px;
  background-color: white;
`;

export const LogoutIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  filter: invert(24%) sepia(90%) saturate(3665%) hue-rotate(352deg) brightness(94%) contrast(106%);
  /* 아이콘을 빨간색으로 보이게 하는 필터 */
  &:hover {
    filter: invert(48%) sepia(93%) saturate(4269%) hue-rotate(352deg) brightness(90%) contrast(98%);
    /* 호버 시 조금 더 진한 빨간색으로 변경 */
  }
`;