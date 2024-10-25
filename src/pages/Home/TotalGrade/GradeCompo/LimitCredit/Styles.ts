import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 1rem; 
  padding: 1rem;
  width: 100px;
  justify-content: center;
  align-items: center; 
  margin: 1rem 0.8rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  box-shadow: 0 4px 10px #789cad;
  min-width: 100px;
  max-width: 100px; /* 최대 너비 설정 */
  width: 100%;
`;


export const CreditContainer = styled.div`
  display: flex;
  margin-bottom: -0.9rem;
  margin-left: -2.0rem;
`;

export const IconBox = styled.div`
  margin-right: 0.5rem;
`;

export const WhatCreditText = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text}; 
`;

export const NumberCreditContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.6rem;
  margin-bottom: -0.9rem;
`;

export const Credit = styled.span`
  font-weight: bold;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.gray};
  font-weight: 330;
`;

export const CreditText = styled.span`
  font-size: 0.9rem;
  margin-left: 0.1rem;
  color: ${({ theme }) => theme.colors.gray};
  margin-top: 1.0rem;
`;
