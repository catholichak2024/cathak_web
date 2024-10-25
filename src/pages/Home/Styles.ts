import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Top = styled.div`
    background-color: white;
    border-bottom-left-radius: 60px;
    border-bottom-right-radius: 60px;
    padding: 20px;
    align-items: center; 
    justify-content: center;
    box-shadow: 0 4px 10px #1a5776; 
    position: relative; 
    width: 100%; 
    height: 320px;
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

export const Ellipse = styled.img`
  width: 80%;             
  position: absolute; 
  top: 50%;              
  left: 50%;   
  transform: translate(-50%, -50%);  
  z-index: 1;          
`;

export const Mascot = styled.div`
  position: absolute;
  top: 50%;              
  left: 65%;
  transform: translate(-50%, -50%);
  z-index: 2;       
`;

export const GrandGoto = styled.div`
  position: absolute;
  top: 8%;            
  left: 25%;
  transform: translate(-50%, -50%); 
`;

export const Detail = styled.div`
  position: absolute;
  top: 70%;              
  left: 50%;
  transform: translate(-50%, -52%);
  z-index: 3; 
  display: flex;
  width: 80%;
  flex-direction: column;
  align-items: center;
`;


export const UserName = styled.div`
  font-size: 17px;        
  margin: 50px;              
  color: #333;  
  left: 20%;
  transform: translate(-180%, 90%);   
  font-weight: bold;    
`;


