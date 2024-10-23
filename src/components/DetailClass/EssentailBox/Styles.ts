import styled from 'styled-components';

// 전체 박스 레이아웃 스타일
export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 1rem; 
  padding: 16px;
  margin: -25px 16px 0;
  display: flex;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 2px 6px -1px ${({ theme }) => theme.colors.alarm};
`;

// 필수 텍스트 스타일
export const Container = styled.span`
  display: flex;
  align-items: center;
`;

export const RedStarBox = styled.span`
  display: flex;
  align-items: center;
  height: 0px;
`;
// 필수 텍스트 스타일
export const RequiredText = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.alarm};
  margin-left: 8px;
  font-size: 0.6rem;
`;

// 설명 텍스트 스타일
export const DescriptionText = styled.p`
  text-align: left;
  margin: 0; 
  font-weight: bold;
  margin-left: 16px;
  color: ${({ theme }) => theme.colors.alarm};
  font-size: 0.6rem;
`;
