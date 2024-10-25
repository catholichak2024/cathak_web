import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  height: 75px;
  border-radius: 20px;
  box-shadow: 0 4px 10px #789cad;
  width: 360px;
  min-width: 260px;
  margin-top: -40px;
`;

export const MymajorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  gap: 10px; /* 아이콘과 텍스트 사이 간격 추가 */
`;

export const TextContainer = styled.div`
  display: flex; 
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-width: 200px;
`;

export const MyMajorText = styled.div`
  font-size: 10px; 
  margin: 0;       
  color: #333;
  font-weight: bold;
`;

export const VerticalLine = styled.div`
  width: 2px;
  height: 30px; 
  background-color: #d6e8f1; 
  margin-left: -25px;
  margin-right: -25px;
`;

export const CreditContainer = styled.div`
  display: flex;
  justify-content: center; 
  margin-bottom: 0; 
`;

export const IconBox = styled.div`
  margin-bottom: 0.2rem;
  width: 16px;
`;

export const WhatCreditText = styled.span`
  font-size: 0.8rem; 
  margin-top: 0.16rem;
  color: #333;    
`;

