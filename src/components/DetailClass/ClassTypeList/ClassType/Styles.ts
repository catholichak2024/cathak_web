import styled from "styled-components";

export const layout = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px; 
`;

export const textWithLine = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;
  cursor:pointer;
  position: relative;
`;

export const underlinedText = styled.span`
  color: ${({ theme }) => theme.colors.black};  
  /* font-size: 1rem; */
  font-size: 12px;
`;

export const line = styled.div`
  width: 60px;
  height: 1.4px; 
  background-color: ${({ theme }) => theme.colors.bottomBar}; // 선 색상
  margin-top: 4px; // 텍스트와 선 사이의 간격
`;
export const redDot = styled.div<{ isSelected: boolean }>` 
  position: absolute;
  right: 0;
  /* top: -5px;  */
  /* left: -8px;  */
  width: 4px; 
  height: 4px; 
  background-color:rgba(236, 150, 150, 1);
; 
  border-radius: 50%; 
  display: ${({ isSelected }) => (isSelected ? 'block' : 'none')}; 
`;