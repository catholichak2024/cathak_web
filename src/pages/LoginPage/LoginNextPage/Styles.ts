import styled from 'styled-components';

export const ErrorText = styled.p`
  color: red;
  font-size: 14px;
  margin: 8px 0;
`;

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
  margin-top: 100px;
`;

export const TopText = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #626262;
`;

export const Middle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 52px;
  margin-bottom: 45px;
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
  align-items: center;
  width: 100%;
`;

export const Input = styled.input`
  width: 260px;
  height: 20px;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 14px;
  border: 1px solid transparent;
  background-color: #D6E8F1;
  border-radius: 16px;

  &:focus {
    outline: 2px solid rgb(130, 180, 210);  
  }
`;

export const SaveButton = styled.button`
  width: 285px;
  margin-top: 20px;
  padding: 10px;
  background-color: #1A264F; 
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 16px;
  cursor: pointer;

  &:hover {
    background-color: #16204a; 
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;

export const LinkText = styled.span`
  font-size: 14px;
  color: #1A264F;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const Separator = styled.span`
  margin: 0 10px;
  color: #d3d3d3;
`;
