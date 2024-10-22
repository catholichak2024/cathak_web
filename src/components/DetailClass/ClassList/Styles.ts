import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background}; /* 테마의 배경색 적용 */
`;

export const ClassContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  border-radius: 0.5rem;
`;