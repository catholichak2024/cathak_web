import styled from 'styled-components';

export const Layout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  background-color: white;
  color: #333;
`;

export const Top = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Container = styled.div`
  position: absolute;
  top: 6px;
  width: 100%;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center; 
`;

export const TitleText = styled.span`
  font-size: 18px;
  position: absolute;
  top: 5%;
  left: 44%;
  text-align: center;
`;

export const MyBigRectangle = styled.div`
  width: 100%;
  height: 350px;
  position: relative; 
  display: flex;
  justify-content: center;
  align-items: flex-end; 
`;

export const MainImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  z-index: 1;
  filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.5));
`;

export const MyHayangi = styled.img`
  width: auto; 
  height: auto;
  bottom: 20%;
  position: absolute;
  z-index: 2;
`;

export const NameText = styled.div`
  position: absolute;
  font-size: 18px;
  font-weight: bold;
  color: black;
  bottom: 11%;
  z-index: 2;
`;

export const MajorSelect = styled.div`
  display: flex;
  justify-content: flex-start; 
  align-items: center;
  padding: 10px;
  width: 100%; 
`;


export const SelectText = styled.p`
  font-size: 13px;
  color: #333;
  margin-left: 50px;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: auto;
  gap: 20px; 
`;

export const ImageButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'isActive',
})<{ isActive: boolean }>`
  position: relative;
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 82px; 
  height: 28px;

  img {
    width: 100%;
    height: auto;
    transition: fill 0.3s ease;
    fill: ${({ isActive }) => (isActive ? '#5E93B6' : 'white')};
  }

  span {
    position: absolute;
    color: ${({ isActive }) => (isActive ? 'white' : '#5E93B6')}; 
    font-weight: bold;
    font-size: 11px;
    z-index: 10;
    transition: color 0.3s ease;
  }
`;

export const Department = styled.div`
  margin: 5px 0;
  left: 20%;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

export const DepartmentTitle = styled.p`
  font-size: 11px;
  color: #626262;
  margin-bottom: 2px;
`;

export const DepartmentInput = styled.input`
  font-size: 11px;
  text-align: left;
  padding: 5px;
  width: 292px;
  height: 30px;
  border: 2px solid #D6E8F1;
  border-radius: 15px;
  background-color: #D6E8F1;
  color: #A1A1A1;
  cursor: pointer;

  &:focus {
    outline: none;
    background-color: #D6E8F1;
    border-color: #D6E8F1; 
    cursor: text;
  }

  &::placeholder {
    color: #A1A1A1; 
  }
`;

export const SaveText = styled.span`
  font-size: 16px;
  color: black;
  display: block;
  margin-top: 20px; 
  text-align: center;
  position: absolute;
  bottom: 20%; 
  left: 50%;
`;

export const SaveButton = styled.button`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #5E93B6;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #49789e;
  }
`;