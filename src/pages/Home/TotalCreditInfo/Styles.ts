import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column; 
  padding: 13px;
  margin-top: 44px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  box-shadow: 0 4px 10px #789cad;
  height: 110px;
`;

export const CreditContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: -4px;
  margin-bottom: -1.5rem;
`;
