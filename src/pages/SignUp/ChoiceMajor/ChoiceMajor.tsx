import React from 'react';
import Select, { StylesConfig } from 'react-select';
import { useRecoilValue } from 'recoil';
import { majorListState } from '../../../recoil/states/MajorListState';

const customStyles:StylesConfig = {
    control: (provided) => ({
      ...provided,
      backgroundColor: 'rgba(214, 232, 241, 1)',  
      borderRadius: '16px',
      padding: '1px',
      border: 'none',
      boxShadow:'none',
      outline:'none',
      color:'rgba(161, 161, 161, 1)',
      fontSize:'12px',
      fontWeight:'600',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? 'rgba(214, 232, 241, 1)' : 'white', 
      color: 'rgba(26, 38, 79, 1)',
      fontSize:'12px',
    }),

  };

  const ChoiceMajor: React.FC = () => {
    const majorList = useRecoilValue(majorListState);
    
    const options = majorList.map((major) => ({
        value: major.majorId,
        label: major.majorName,
    }));

    return (
        <div>
        
            <Select
                id="major-select"
                options={options}
                placeholder="학과명으로 검색"
                noOptionsMessage={() => '일치하는 학과가 없습니다.'}
                isClearable
                isSearchable
                styles={customStyles}
                onChange={(selectedOption) => {
                if (selectedOption) {
                    // console.log('선택된 전공:', selectedOption.value); // 선택된 전공의 ID
                }
                }}
            />
        </div>
    );
};

export default ChoiceMajor;
