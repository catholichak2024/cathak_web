import styled from 'styled-components';

export const layout = styled.div`
  display: flex;
  justify-content: center;
  gap: 45px; 
`;

export const textWithLine = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;
`;

export const underlinedText = styled.span`
  color: ${({ theme }) => theme.colors.black};  
  font-size: 1rem;
`;

export const line = styled.div`
  width: 72px;
  height: 3px; 
  background-color: ${({ theme }) => theme.colors.bottomBar}; // 선 색상
  margin-top: 4px; // 텍스트와 선 사이의 간격
`;
