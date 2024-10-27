import styled from 'styled-components';

export const Layout = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 2rem;
  left: 49%;
  transform: translateX(-50%);
  z-index: 100;
`;

export const IconLayout = styled.button`
  width: 20%;
  background: none;
  border: none;
  padding: 0; 
  margin: 0 30px; 
`;

export const ButtonLayout = styled.button`
  cursor: pointer;
  width: 70%;
  background: none;
  border: none;
  padding: 0; 
  margin-bottom: 9px;
`;

export const ConditionText = styled.div`
  font-size: 16px;
  color: #000000; 
  margin: 0 -14px 0 -4px; 
  font-weight: bold;
`;

export const LogoutText = styled.div`
  font-size: 10px;
  color: #626262;
  margin: 0 10px; 
  font-weight: bold;
  cursor: pointer;
`;