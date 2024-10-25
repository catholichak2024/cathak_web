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

export const ConditionText = styled.div`
  font-size: 16px; // 원하는 폰트 크기
  color: #000000; 
  margin: 0 -5px; 
  font-weight: bold;
`;

export const LogoutText = styled.div`
  font-size: 10px; // 원하는 폰트 크기
  color: #333; // 원하는 색상
  margin: 0 10px; // 원하는 여백
`;