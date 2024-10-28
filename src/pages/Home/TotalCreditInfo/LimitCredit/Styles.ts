import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 1rem; 
  padding: 1rem;
  margin: 0.5rem -0.5rem;
  max-width: 110px;
  width: 100%;
`;


export const CreditContainer = styled.div`
  display: flex;
   margin-top: -0.7rem;
  margin-bottom: -0.1rem;
  margin-left: -1.9rem;
  justify-content: center; 
`;

export const IconBox = styled.div`
  margin-right: 0.4rem;
`;

export const WhatCreditText = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text}; 
`;

export const NumberCreditContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Credit = styled.span`
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.navy};
  font-weight: 200;
`;

export const CreditText = styled.span`
  font-size: 0.8rem;
  margin-left: 0.4rem;
  color: ${({ theme }) => theme.colors.navy};
  margin-top: 2.5rem;
`;
