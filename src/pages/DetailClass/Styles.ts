import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.backbasic};
  color: #333;

  h1 {
    font-size: 2.5rem;
    margin: 0;
    padding: 20px;
    text-align: center;
  }
`;
