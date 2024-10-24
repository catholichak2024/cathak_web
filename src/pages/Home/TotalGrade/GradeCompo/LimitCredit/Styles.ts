import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 1rem; 
  padding: 1rem;
  width: 100px;
  justify-content: center;
  align-items: center; 
  margin: 0.8rem 0.8rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  box-shadow: 0 4px 10px #789cad;
`;


export const CreditContainer = styled.div`
  display: flex;
  margin-bottom: -0.9rem;
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
  margin-bottom: -0.9rem;
`;

export const Credit = styled.span`
  font-weight: bold;
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.gray};
`;

export const CreditText = styled.span`
  font-size: 0.8rem;
  margin-left: 0.4rem;
  color: ${({ theme }) => theme.colors.gray};
  margin-top: 2.5rem;
`;
