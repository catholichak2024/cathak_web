import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  margin-top: -40px;
`;

export const ClassContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  border-radius: 0.5rem;
`;

export const ClassBox = styled.div`
  max-height: 300px;
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
  width: 90%;
  justify-content: center;
`;