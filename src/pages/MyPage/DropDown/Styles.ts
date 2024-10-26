import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const InputWithButton = styled.div`
  display: flex;
  align-items: center;
  border: none;
  border-radius: 15px;
  width: 280px; 
  background-color: #D6E8F1;
`;

export const TextInput = styled.input`
  width: 85%;
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 15px 0 0 15px;
  background-color: #D6E8F1;
`;

export const ToggleButton = styled.button`
  width: 15%;
  background: #D6E8F1;
  border: none;
  border-radius: 0 15px 15px 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 15px;
    height: 15px;
  }
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  width: 124px;
  left: auto; 
  right: 0;
  max-height: 150px;
  background: white;
  border: 1px solid #ccc;
  border-radius: 15px;
  overflow-y: auto;
  z-index: 100;
  list-style: none; 
  padding: 0; 
  margin: 5px 0 0 0; 

  &::-webkit-scrollbar {
    width: 0; 
    background: transparent; 
  }

  &::-webkit-scrollbar-thumb {
    background: transparent;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

export const DropdownItem = styled.li`
  padding: 10px;
  cursor: pointer;
  text-align: center; 
  
  &:hover {
    background: #D6E8F1;
  }
`;
