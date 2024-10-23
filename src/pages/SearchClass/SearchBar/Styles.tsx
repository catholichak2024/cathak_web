import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 90%;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; 
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 12px; 
  border:none;
  outline: none;
  padding: 0.9rem; 
  margin-bottom: 0.7rem;
  box-shadow: 0 0 8px rgba(193, 223, 238, 1);
  & input{
    border:none;
    outline: none;
    
  }
`;

