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
  flex-direction: column; 
  align-items: center;
  cursor:pointer;
  position: relative;
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