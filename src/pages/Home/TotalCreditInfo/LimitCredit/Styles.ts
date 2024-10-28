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
  margin-top: 3px;
`;

export const Credit = styled.span`
  font-size: 3.4em;
  color: ${({ theme }) => theme.colors.navy};
  font-weight: 300; /* 가장 가까운 굵기 사용 */
  opacity: 0.9; /* 투명도를 살짝 낮춰서 조금 더 가벼워 보이도록 */
  letter-spacing: -0.8px;
  margin-left: 15px;
`;

export const CreditText = styled.span`
  font-size: 0.8rem;
  margin-left: 0.4rem;
  color: ${({ theme }) => theme.colors.navy};
  margin-top: 1.7rem;
`;
