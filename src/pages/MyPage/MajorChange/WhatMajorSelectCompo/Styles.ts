import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px; 
  height: 75px;
  border-radius: 20px;
  width: 290px;
  margin-left: -30px;
  margin-top: 8px;
`;


export const MajorSelectContainer = styled.div`
  cursor: pointer;
  border-radius: 8px;
  padding: 8px;
`;

export const TextContainer = styled.div<{ selected: boolean }>`
    display: flex; 
    width: 70px;
    height: 30px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-right: -34px; 
    justify-content: center;
    background-color: ${({ selected }) => (selected ? '#5e93b6' : '#ffffff')};
    box-shadow: 0 0 2px 1px #d6e8f1;
    border: 2px solid #d6e8f1;
    border-radius: 15px;
`;

export const WhatMajorText = styled.span<{ selected: boolean }>`
  color: ${({ selected }) => (selected ? '#ffffff' : '#5e93b6')};  
  /* font-size: 1rem; */
  font-size: 12px;
  margin: 3px;
  font-weight: bold;
`;
