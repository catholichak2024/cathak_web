import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width:100%;
`;

export const Container = styled.div`
  width: 97%;
  display: flex;
  justify-content: space-between;
  align-items: center; 
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 12px; 
  border:none;
  outline: none;
  padding: 0.9rem; 
  margin-bottom: 0.7rem;
  margin-left: 0.3rem;
  box-shadow: 0 0 8px rgba(193, 223, 238, 1);
  & input{
    border:none;
    outline: none;
    
  }
`;

