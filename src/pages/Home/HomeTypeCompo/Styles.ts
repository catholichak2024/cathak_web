import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px; 
  background-color: #eff8fe;
  height: 75px;
  border-radius: 20px;
  box-shadow: 0 4px 10px #789cad;
  width: 290px;
`;

export const NumberCreditContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor:pointer;
  position: relative;
`;

export const TextContainer = styled.div`
    display: flex; 
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-right: 3px; // 줄과의 간격
    justify-content: center;
`;

export const WhatCreditText = styled.span`
  color: ${({ theme }) => theme.colors.black};  
  /* font-size: 1rem; */
  font-size: 12px;
  margin: 3px;
`;

export const Credit = styled.span`
  color: ${({ theme }) => theme.colors.black};  
  /* font-size: 1rem; */
  font-size: 12px;
  font-weight: bold;
`;

export const VerticalLine = styled.div`
    width: 2px;
    height: 30px; 
    background-color: #d6e8f1; 
    margin-left: 23px;
    margin-right: -30px;
`;