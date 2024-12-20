import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position:relative;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.backbasic};
  color: #333;
  /* overflow: hidden; */
  h1 {
    font-size: 2.5rem;
    margin: 0;
    padding: 20px;
    text-align: center;
  }
  
`;
export const Content = styled.div`
  width: 90%;
  position: absolute;
  top: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  overflow: hidden;
`;


export const ErrorText = styled.div`
  position: relative;
  left:-30%;
  color:rgba(239, 102, 102, 1);
  font-size: 12px;

`;

export const Con=styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`
