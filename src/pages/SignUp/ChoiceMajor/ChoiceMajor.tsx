import React, { useEffect, useState } from 'react';
import Select, { StylesConfig } from 'react-select';

interface ChoiceMajorProps {
  onSelect: (value: string | null) => void;
}

interface OptionType {
  value: string;
  label: string;
}

const customStyles: StylesConfig<OptionType, false> = {
  control: (provided) => ({
    ...provided,
    backgroundColor: 'rgba(214, 232, 241, 1)',
    borderRadius: '16px',
    padding: '1px',
    border: 'none',
    boxShadow: 'none',
    outline: 'none',
    color: 'rgba(161, 161, 161, 1)',
    fontSize: '12px',
    fontWeight: '600',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? 'rgba(214, 232, 241, 1)' : 'white',
    color: 'rgba(26, 38, 79, 1)',
    fontSize: '12px',
  }),
};

const ChoiceMajor: React.FC<ChoiceMajorProps> = ({ onSelect }) => {
  const [options, setOptions] = useState<OptionType[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMajors = async () => {
      try {
        const response = await fetch('http://13.125.38.246:3000/EveryGrade/user/signup/major');
        if (!response.ok) {
          throw new Error('학과 목록을 불러오는 데 실패했습니다.');
        }

        const data = await response.json();
        // console.log(data);
        const formattedOptions = data.result.majorData.map((major: { name: string }) => ({
          value: major.name,
          label: major.name,
        }));

        setOptions(formattedOptions);
      } catch (error) {
        console.error(error);
        setError('학과 목록을 불러오는 데 문제가 발생했습니다.');
      }
    };

    fetchMajors();
  }, []);

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
          onSelect(selectedOption ? selectedOption.value : null); // 선택된 값을 상위 컴포넌트로 전달
        }}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default ChoiceMajor;
