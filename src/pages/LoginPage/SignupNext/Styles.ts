import styled from 'styled-components';

export const Layout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: backbasic;
  color: #333;
`;

export const Top = styled.div`
  width: 100%;
  margin-top: 10px;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: center;
  padding-left: 50px; 
`;

export const TitleText = styled.h1`
  font-size: 18px;
  font-weight: bold;
  color: #1A264F;
  text-align: left;
`;

export const Description = styled.p`
  margin-top: 10px;
  font-size: 14px;
  text-align: left; 
  padding-left: 50px; 
  line-height: 1.3;
  color: #626262;
`;

export const HorizontalLine = styled.hr`
  width: 320px;
  height: 1px;
  background-color: #AED3EC;
  border: none;
  margin-top: 30px; 
  margin-bottom: 10px;
`;

export const Middle = styled.div`
  width: 100%;
  margin-top: 40px; 
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  font-size: 12px;
  color: #1A264F;
  margin-bottom: 4px;
  font-weight: bold;
  text-align: left;
  width: 100%;
  max-width: 280px;
`;

export const Input = styled.input.withConfig({
  shouldForwardProp: (prop) => prop !== 'hasError',
})<{ hasError: boolean }>`
  width: 270px;
  height: 40px;
  border: 2px solid ${({ hasError }) => (hasError ? '#FF5C5C' : 'white')};
  border-radius: 15px;
  padding: 0 5px;
  font-size: 11px;
  color: #1A264F;
  outline: none;
  margin-bottom: 1px;

  &::placeholder {
    color: #A1A1A1;
    font-size: 11px;
  }

  &:focus {
    border-color: ${({ hasError }) => (hasError ? '#FF5C5C' : '#A7C7E7')};
  }
`;

export const ErrorMessage = styled.p.withConfig({
  shouldForwardProp: (prop) => prop !== 'isVisible',
})<{ isVisible: boolean }>`
  color: #FF5C5C;
  font-size: 11px;
  margin-top: 2px;
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  height: 16px;
  text-align: left;
  width: 100%;
  max-width: 280px;
`;

export const SubmitButton = styled.button`
  width: 264px;
  height: 40px;
  background-color: ${({ disabled }) => (disabled ? '#DADADA' : '#1A264F')};
  color: white;
  border: none;
  border-radius: 15px;
  font-size: 14px;
  margin-left: 5px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ disabled }) => (disabled ? '#DADADA' : '#162142')};
  }

  img {
    width: auto; 
    height: auto;
  }
`;
