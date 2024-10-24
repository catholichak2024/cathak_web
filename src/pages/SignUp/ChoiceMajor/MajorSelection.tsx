import React, { useState } from 'react';
import ChoiceMajor from './ChoiceMajor'; 
import { ButtonGroup, SelectGroup } from './Styles';


const MajorSelection: React.FC = () => {

  const [selectedOption, setSelectedOption] = useState<string>('심화'); 

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <ButtonGroup>
        <button 
            type="button" 
            onClick={() => handleOptionChange('심화')}
            className={selectedOption === '심화' ? 'selected' : ''}>
            전공심화
        </button>
        <button 
            type="button" 
            onClick={() => handleOptionChange('복수')}
            className={selectedOption === '복수' ? 'selected' : ''}>
            복수전공
        </button>
        <button 
            type="button" 
            onClick={() => handleOptionChange('부전공')}
            className={selectedOption === '부전공' ? 'selected' : ''}>
            부전공
        </button>
      </ButtonGroup>

      <SelectGroup>
        <div>
          <label>제1전공</label>
          <ChoiceMajor />
        </div>

        {selectedOption === '복수' && (
          <div>
            <label>제2전공</label>
            <ChoiceMajor />
          </div>
        )}

        {selectedOption === '부전공' && (
          <div>
            <label>부전공</label>
            <ChoiceMajor />
          </div>
        )}
      </SelectGroup>
    </div>
  );
};

export default MajorSelection;
