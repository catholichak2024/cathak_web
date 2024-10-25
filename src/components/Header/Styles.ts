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
  margin: 0 30px; //헤더 두개 사이즈 조절
`;

export const ButtonLayout = styled.button`
  cursor: pointer;
  width: 50%;
  background: none;
  border: none;
  padding: 0; 
  margin: 0;
`;