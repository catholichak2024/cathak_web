import styled from 'styled-components';

export const Layout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  background-color: #D6E8F1;
  color: #333;
`;

export const Top = styled.div`
  width: 100%;
  margin-top: 20%;
`;

export const UsernameInput = styled.input`
  display: none;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
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
`;

export const Middle = styled.div`
  width: 100%;
  margin-top: 20px; 
  display: flex;
  margin-left: 30px;
  flex-direction: column;
  align-items: flex-start;
`;

export const Label = styled.label`
  font-size: 11px;
  color: #1A264F;
  margin: 30px 0 5px 0;
  display: block;
  padding-left: 12px;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 274px;
  height: 40px;
  background-color: #FFFFFF;
  border-radius: 18px;
  padding: 0 10px;
  font-size: 14px;
  color: #1A264F;
  &::placeholder {
    color: #A1A1A1; 
  }
  &:focus::placeholder {
    color: transparent;
  }
`;

export const HelperText = styled.p`
  font-size: 8px;
  color: #1A264F;
  margin-top: 5px;
  padding-left: 10px;
`;

export const ErrorMessage = styled.p`
  font-size: 10px;
  color: red;
  margin-top: 5px;
  padding-left: 5px;
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

export const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const PopupContent = styled.div`
  background-color: white;
  border-radius: 15px;
  padding: 20px;
  text-align: center;
  width: 320px;
  height: 194px;
  display: flex;
  flex-direction: column; /* 세로 정렬 */
  justify-content: center; /* 세로 중앙 정렬 */
  align-items: center; /* 가로 중앙 정렬 */
`;

export const PopupTitle = styled.h2`
  font-size: 16px;
  color: black;
  margin-bottom: 5px;
`;

export const PopupDescription = styled.p`
  font-size: 12px;
  color: #626262;
`;

// export const CloseButton = styled.button`
//   margin-top: 20px;
//   background-color: #1A264F;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   padding: 10px 20px;
//   cursor: pointer;
// `;
