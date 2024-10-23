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
`;

export const ImageButton = styled.button<{ isActive: boolean }>`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 10px;
  width: 70px; 
  height: auto;

  img {
    width: auto;
    height: 28px;
    filter: ${(props) =>
      props.isActive
        ? 'sepia(100%) saturate(300%) hue-rotate(165deg) brightness(1.1)'
        : 'brightness(10) invert(1)'}; 
    
    transition: filter 0.3s ease; 
    
    filter-border: 2px solid #D6E8F1; 
  }

  &:focus {
    outline: none;
  }
`;
