import React from 'react';
import Select, { StylesConfig } from 'react-select';
import * as S from './Styles';

interface GradeData {
    id: number;
    subject_name: string;
    str_score: string | null;
    credit: number;
}

interface Props {
    grades: GradeData[];
    selectedGrades: { [key: number]: string | null };
    setSelectedGrades: React.Dispatch<React.SetStateAction<{ [key: number]: string | null }>>;
}

interface OptionType {
    value: string;
    label: string;
}

const customStyles: StylesConfig<OptionType, false> = {
    control: (provided) => ({
      ...provided,
      border: 'none',
      boxShadow: 'none',
      outline: 'none',
      color: 'rgba(161, 161, 161, 1)',
        cursor: 'pointer',
        // border: '1px solid #ffffff',
        width: '64px',
        fontSize: '11px'
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? 'rgba(214, 232, 241, 1)' : 'white',
      color: 'rgba(26, 38, 79, 1)',
      fontSize: '11px',
      fontWeight: '300',
    }),
    dropdownIndicator: (base) => ({
        ...base,
        padding: '2px',
    }),
  };
  

const gradeOptions = [
    { value: 'A+', label: 'A+' },
    { value: 'A0', label: 'A0' },
    { value: 'B+', label: 'B+' },
    { value: 'B0', label: 'B0' },
    { value: 'C+', label: 'C+' },
    { value: 'C0', label: 'C0' },
    { value: 'D+', label: 'D+' },
    { value: 'D0', label: 'D0' },
    { value: 'F', label: 'F' },
    { value: 'P', label: 'P' },
    { value: 'NP', label: 'NP' }
];

const ClassContainer: React.FC<Props> = ({ grades, selectedGrades, setSelectedGrades }) => {
     
    // 중복된 id와 subject_name 조합을 가진 항목 제거
     const uniqueGrades = grades.filter((grade, index, self) =>
        index === self.findIndex((g) => (
            g.id === grade.id && g.subject_name === grade.subject_name
        ))
    );
    
    const handleGradeChange = (classId: number, option: { value: string; label: string } | null) => {
        setSelectedGrades((prev) => ({
            ...prev,
            [classId]: option ? option.value : null
        }));
        
    };
    
    return (
        <S.Layout>
            <S.ClassBox>
                {uniqueGrades.map((grade) => (
                    <S.Container key={`${grade.id}-${grade.subject_name}`}>
                        <S.ClassName>{grade.subject_name}</S.ClassName>
                        <S.Credit>{grade.credit}</S.Credit>
                        <Select
                            options={gradeOptions}
                            value={gradeOptions.find(option => option.value === selectedGrades[grade.id]) || null}
                            onChange={(option) => handleGradeChange(grade.id, option)}
                            placeholder=" "
                            isSearchable={false}
                            styles={customStyles}
                        />
                    </S.Container>
                ))}
            </S.ClassBox>
        </S.Layout>
    );
}

export default ClassContainer;


// styles={{
//     control: (base) => ({
//         ...base,
//         cursor: 'pointer',
//         border: '1px solid #ffffff',
//         width: '64px',
//         fontSize: '11px'
//     }),
//     dropdownIndicator: (base) => ({
//         ...base,
//         padding: '2px',
//     }),
// }}