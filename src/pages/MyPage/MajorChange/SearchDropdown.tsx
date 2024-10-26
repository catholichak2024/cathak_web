import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { MajorAreaListState } from '../../../recoil/states/majorstate';

const DropdownContainer = styled.div`
  width: 290px;
  height: 42px;
  background-color: #d6e8f1;
  border-radius: 15px; 
  display: flex;
  margin-top: 15px;
  align-items: center;
  padding: 0 10px; 
  color: #a1a1a1; 
  font-size: 14px; 
  cursor: pointer;
`;

const Dropdown = styled.select`
  width: 100%;
  height: 100%;
  background: transparent; 
  border: none; 
  color: inherit; 
  font-size: inherit;
  outline: none;
`;

interface SearchDropdownProps {
    onChange: (value: string) => void; // props 타입 정의
  }

const SearchDropdown: React.FC<SearchDropdownProps> = ({ onChange }) => {
  const majorAreaList = useRecoilValue(MajorAreaListState);
  
  // 학과 이름만 추출하여 배열로 반환
  const majorNames = majorAreaList.flatMap(area => 
    area.relatedMajors.map(major => major.name)
  );

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value); 
  };

  return (
    <DropdownContainer>
      <Dropdown onChange={handleSelectChange}>
        <option value="">학과명으로 검색</option>
        {majorNames.map((name, index) => (
          <option key={index} value={name}>
            {name}
          </option>
        ))}
      </Dropdown>
    </DropdownContainer>
  );
};

export default SearchDropdown;