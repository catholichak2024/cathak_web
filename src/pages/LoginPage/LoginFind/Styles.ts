import styled from 'styled-components';

export const Layout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  background-color: backbasic;
  color: #333;
`;

export const Top = styled.div`
  width: 100%;
  margin-top: 20%;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: center;
  padding-left: 45px; 
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
  padding-left: 20px; 
  line-height: 1.3;
  color: #626262;
  padding-left: 45px; 
`;

export const PswImage = styled.img`
  width: auto;
  height: auto;
  margin-right: 45px;
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
  margin-top: 20px; 
  display: flex;
  margin-left: 110px;
  flex-direction: column;
  align-items: flex-center;
`;

export const Label = styled.label`
  font-size: 11px;
  color: #1A264F;
  margin: 1px;
  display: block;
  padding-left: 15px;
  font-weight: bold;
`;

export const Input = styled.input.withConfig({
  shouldForwardProp: (prop) => prop !== 'hasError',
})<{ hasError: boolean }>`
  width: 254px;
  height: 35px;
  margin-left:10px;
  border: 2px solid ${({ hasError }) => (hasError ? '#FF5C5C' : 'White')};
  border-radius: 15px;
  padding: -5px 10px;
  font-size: 12px;
  color: #1A264F;
  outline: none;

  &::placeholder {
    color: #A1A1A1; 
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
  margin-top: 5px;
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  height: 16px;
  padding-left: 16px; 
`;

export const SubmitButton = styled.button`
  width: 264px;
  height: 40px;
  background-color: ${({ disabled }) => (disabled ? '#DADADA' : '#1A264F')};
  color: white;
  border: none;
  border-radius: 15px;
  font-size: 14px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  margin-top: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px; 
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ disabled }) => (disabled ? '#DADADA' : '#162142')};
  }

  img {
    width: auto; 
    height: auto;
  }
`;
