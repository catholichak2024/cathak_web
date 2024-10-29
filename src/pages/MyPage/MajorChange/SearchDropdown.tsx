import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const DropdownContainer = styled.div`
  width: 290px;
  background-color: #d6e8f1;
  border-radius: 15px;
  margin-top: 15px;
  position: relative;
  padding: 0 10px;
`;

const Input = styled.input`
  width: 100%;
  height: 42px;
  background: transparent;
  border: none;
  color: #a1a1a1;
  font-size: 14px;
  outline: none;
  padding: 0 10px;
`;

const OptionContainer = styled.div`
  position: absolute;
  top: 42px;
  left: 0;
  right: 0;
  background-color: white;
  border-radius: 8px;
  max-height: 150px;
  overflow-y: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 100;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

const Option = styled.div`
  padding: 10px;
  font-size: 14px;
  color: #333;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

interface SearchDropdownProps {
  onChange: (value: string) => void;
}

const SearchDropdown: React.FC<SearchDropdownProps> = ({ onChange }) => {
  const [majorNames, setMajorNames] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);

  useEffect(() => {
    const fetchMajors = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) throw new Error("토큰이 없습니다.");

        const response = await fetch('http://13.125.38.246:3000/EveryGrade/mypage/major/search', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          const names = data.majorData.map((major: { name: string }) => major.name);
          setMajorNames(names);
          setFilteredOptions(names); // 초기 옵션을 전공 목록으로 설정
        } else {
          console.error('전공 목록 요청 실패:', response.status);
        }
      } catch (error) {
        console.error('전공 목록 요청 중 에러 발생:', error);
      }
    };

    fetchMajors();
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    if (value === '') {
      setFilteredOptions(majorNames); // 검색어가 없으면 전체 목록 표시
    } else {
      setFilteredOptions(
        majorNames.filter((name) =>
          name.toLowerCase().includes(value.toLowerCase())
        )
      );
    }
    onChange(value);
  };

  const handleOptionClick = (name: string) => {
    setSearchTerm(name);
    onChange(name);
    setFilteredOptions([]); // 드롭다운 숨김
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onChange(searchTerm);
      setFilteredOptions([]); // 드롭다운 숨김
    }
  };

  return (
    <DropdownContainer>
      <Input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="학과명으로 검색"
      />
      {filteredOptions.length > 0 && (
        <OptionContainer>
          {filteredOptions.map((name, index) => (
            <Option key={index} onClick={() => handleOptionClick(name)}>
              {name}
            </Option>
          ))}
        </OptionContainer>
      )}
    </DropdownContainer>
  );
};

export default SearchDropdown;
