import styled from 'styled-components';

export const Layout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-item: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
`;