import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 1rem; 
  padding: 1rem;
  margin: 0.5rem 0;
`;


export const CreditContainer = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
  justify-content: center; 
`;

export const IconBox = styled.div`
  margin-right: 0.5rem; /* 아이콘과 텍스트 간의 간격 */
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
  font-weight: bold;
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.navy};
`;

export const CreditText = styled.span`
  font-size: 0.8rem;
  margin-left: 0.4rem;
  color: ${({ theme }) => theme.colors.navy};
  height: 0px;
`;
