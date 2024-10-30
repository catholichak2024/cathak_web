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
  background-color: rgba(0, 0, 0, 0.5); /* 어두운 배경 효과 */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const PopupContent = styled.div`
  background-color: #fff;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  width: 320px;
  height: 150px;
  text-align: center;
`;

export const PopupMessage = styled.div`
  font-size: 16px;
  color: #333;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const PopupButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

export const PopupButton = styled.button`
  flex: 1;
  padding: 10px;
  font-size: 14px;
  font-weight: bold;
  color: black;
  background-color: #F1F1F1;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 10px;

  &:hover {
    background-color: #D6E8F1;
  }
`;
