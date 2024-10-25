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
export const Content = styled.div`
  width: 100%;
  position: absolute;
  top: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;


export const ErrorText = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  position: absolute;
  top:6rem;
  left:10%;
  color:rgba(239, 102, 102, 1);
  font-size: 12px;

`;