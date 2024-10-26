import React, { useState } from 'react';
import * as S from './Styles';
import Toggle from '../../../assets/my_image/toggle_button.svg';

interface DropdownProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, value, onChange }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSelect = (option: string) => {
    onChange(option);
    setShowDropdown(false);  
  };

  return (
    <S.DropdownContainer>
      <S.InputWithButton>
        <S.TextInput
          type="text"
          placeholder="학과명으로 검색"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <S.ToggleButton onClick={() => setShowDropdown((prev) => !prev)}>
          <img src={Toggle} alt="Toggle" />
        </S.ToggleButton>
      </S.InputWithButton>

      {showDropdown && (
        <S.DropdownList>
          {options.map((option) => (
            <S.DropdownItem key={option} onClick={() => handleSelect(option)}>
              {option}
            </S.DropdownItem>
          ))}
        </S.DropdownList>
      )}
    </S.DropdownContainer>
  );
};

export default Dropdown;
