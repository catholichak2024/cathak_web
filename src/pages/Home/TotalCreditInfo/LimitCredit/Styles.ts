import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 1rem; 
  padding: 1rem;
  margin: 0.5rem 0;
  max-width: 110px; /* 최대 너비 설정 */
  width: 100%;
`;


export const CreditContainer = styled.div`
  display: flex;
   margin-top: -0.7rem;
  margin-bottom: -0.1rem;
  margin-left: -2.7rem;
  justify-content: center; 
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
  z-index: 100;
`;

export const Credit = styled.span`
  font-weight: bold;
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.navy};
`;

export const CreditText = styled.span`
  font-size: 0.8rem;
  margin-left: 0.4rem;
  color: ${({ theme }) => theme.colors.navy};
  margin-top: 2.5rem;
`;
