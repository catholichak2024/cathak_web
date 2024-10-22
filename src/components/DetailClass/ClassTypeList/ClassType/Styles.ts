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

export const line = styled.div<{ isSelected: boolean }>`
  width: 76px;
  height: 3px; 
  background-color: ${({ isSelected, theme }) => isSelected ? theme.colors.black : theme.colors.bottomBar};
  margin-top: 4px; 
`;

export const textContainer = styled.div`
  display: flex;
  align-items: center; 
  position: relative; 
`;

export const redDot = styled.div`
  position: absolute;
  top: -5px;
  right: -5px;
  width: 6px;
  height: 6px;
  background-color: ${({ theme }) => theme.colors.alarm}; 
  border-radius: 50%; 
`;
