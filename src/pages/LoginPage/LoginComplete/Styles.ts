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
  padding-left: 45px; 
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
  margin-top: 20px; 
  display: flex;
  margin-left: 100px;
  flex-direction: column;
  align-items: flex-start;
`;

export const Label = styled.label`
  font-size: 11px;
  color: #1A264F;
  margin: 1px;
  display: block;
  padding-left: 12px;
  font-weight: bold;
`;

export const UserInfoBox = styled.div`
  width: 305px;
  height: 110px;
  background-color: #D6E8F1;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
`;

export const UserNameBox = styled.div`
  font-size: 18px;
  color: #1A264F;
  font-weight: bold;
  text-align: center;
`;

export const SubmitButton = styled.button`
  width: 264px;
  height: 40px;
  background-color: #1A264F;
  color: white;
  border: none;
  border-radius: 15px;
  font-size: 14px;
  cursor: pointer;
  margin-top: 70px;
  margin-left: 20px;
  display: flex;
  justify-content: center;
  align-items: center; 
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #162142;
  }

  img {
    width: auto; 
    height: auto;
  }
`;
