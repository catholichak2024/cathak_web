import styled from 'styled-components';

// 전체 박스 레이아웃 스타일
export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 1rem; 
  padding: 16px;
  margin: -15px 16px 0;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const ClassBox = styled.div`
  max-height: 370px;
  overflow-y: auto;
  /* 스크롤바 스타일 */
    &::-webkit-scrollbar {
        width: 2px;
    }

    &::-webkit-scrollbar-track {
        background: #f1f1f1; /* 스크롤바 배경 색상 */
    }

    &::-webkit-scrollbar-thumb {
        background: #626262; /* 스크롤바 손잡이 색상 */
        border-radius: 10px; /* 손잡이 둥글게 처리 */
    }

    &::-webkit-scrollbar-thumb:hover {
        background: #555; /* 손잡이 호버 색상 */
    }
  width: 100%;
  justify-content: center;
`;
// 필수 텍스트 스타일
export const ScoreContainer = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
`;



