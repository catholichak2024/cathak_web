import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -0.6rem;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: auto;
  padding: 1rem;
`;

export const ScoreText = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 2rem;
  margin-left: 1rem;
  font-size: 2rem;
`;

export const SaveButton = styled.button`
    margin-top: 1rem;
    margin-left: 14rem;
    background-color: #003366; 
    color: white;
    border: none;
    border-radius: 2rem;
    padding: 0.5rem 2rem;
    font-size: 0.6rem;
    cursor: pointer;
    width:30%;

    &:hover {
        background-color: #002244; /* 조금 더 어두운 남색 */
    }
`;
