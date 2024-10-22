import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 90%;
  overflow-y: scroll;

`;

export const Container = styled.div`
  display: flex;
  align-items: center; 
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 1rem; 
  padding: 1rem 1rem; 
  margin-bottom: 0.7rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0.1, 0.1);
`;
export const ClassName = styled.h2`
  margin: 0 20% 0 0;
  font-size: 0.8rem; 
  flex: 1; /* 공간을 차지하도록 설정 */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 31ch;
  text-align: left;
`;

export const Credit = styled.p`
  margin: 0 3% 0 0;
  font-size: 0.7rem; 
  text-align: center;
`;

export const IconWrapper = styled.div`
  margin: 0;
  flex: 0 0 auto; 
`;