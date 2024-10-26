import React, { useState } from 'react';
import ChoiceMajor from './ChoiceMajor';
import { ButtonGroup, SelectGroup } from './Styles';

interface MajorSelectionProps {
  onMajorDataChange: (majorData: { majorType: string, major1: string | null, major2?: string | null, minor?: string | null }) => void;
}

const MajorSelection: React.FC<MajorSelectionProps> = ({ onMajorDataChange }) => {
  const [selectedOption, setSelectedOption] = useState<string>('전공심화');
  const [major1, setMajor1] = useState<string | null>(null);
  const [major2, setMajor2] = useState<string | null>(null);
  const [minor, setMinor] = useState<string | null>(null);

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
    setMajor1(null);
    setMajor2(null);
    setMinor(null);

    onMajorDataChange({
      majorType: option,
      major1: null, // major1 초기값도 null로 설정
      major2: null,
      minor: null,
    });
  };

  const handleMajorChange = (majorField: 'major1' | 'major2' | 'minor', value: string | null) => {
    if (majorField === 'major1') setMajor1(value);
    if (majorField === 'major2') setMajor2(value);
    if (majorField === 'minor') setMinor(value);

    const updatedData = {
      majorType: selectedOption,
      major1: majorField === 'major1' ? value : major1,
      major2: majorField === 'major2' ? value : major2,
      minor: majorField === 'minor' ? value : minor,
    };

    onMajorDataChange(updatedData);
  };

  return (
    <div>
      <ButtonGroup>
        <button 
          type="button" 
          onClick={() => handleOptionChange('전공심화')}
          className={selectedOption === '전공심화' ? 'selected' : ''}
        >
          전공심화
        </button>
        <button 
          type="button" 
          onClick={() => handleOptionChange('복수전공')}
          className={selectedOption === '복수전공' ? 'selected' : ''}
        >
          복수전공
        </button>
        <button 
          type="button" 
          onClick={() => handleOptionChange('부전공')}
          className={selectedOption === '부전공' ? 'selected' : ''}
        >
          부전공
        </button>
      </ButtonGroup>

      <SelectGroup>
        <div>
          <label>제1전공</label>
          <ChoiceMajor key={selectedOption} onSelect={(value) => handleMajorChange('major1', value)} />
        </div>

        {selectedOption === '복수전공' && (
          <div>
            <label>제2전공</label>
            <ChoiceMajor key={`${selectedOption}-major2`} onSelect={(value) => handleMajorChange('major2', value)} />
          </div>
        )}

        {selectedOption === '부전공' && (
          <div>
            <label>부전공</label>
            <ChoiceMajor key={`${selectedOption}-minor`} onSelect={(value) => handleMajorChange('minor', value)} />
          </div>
        )}
      </SelectGroup>
    </div>
  );
};

export default MajorSelection;
