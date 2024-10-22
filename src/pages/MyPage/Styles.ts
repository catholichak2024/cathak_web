import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  background-color: backbasic;
  color: #333;

  h1 {
    font-size: 2.5rem;
    margin: 0;
    padding: 20px;
    text-align: center;
  }
`;

export const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MyRectangle = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  z-index: 1;
  filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.5));
`;