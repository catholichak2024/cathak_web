import React from 'react';
import Select from 'react-select';
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

const gradeOptions = [
    { value: 'A+', label: 'A+' },
    { value: 'A', label: 'A' },
    { value: 'B+', label: 'B+' },
    { value: 'B', label: 'B' },
    { value: 'C+', label: 'C+' },
    { value: 'C', label: 'C' },
    { value: 'D+', label: 'D+' },
    { value: 'D', label: 'D' },
    { value: 'F', label: 'F' },
    { value: 'P', label: 'P' },
    { value: 'NP', label: 'NP' }
];

const ClassContainer: React.FC<Props> = ({ grades, selectedGrades, setSelectedGrades }) => {
    const handleGradeChange = (classId: number, option: { value: string; label: string } | null) => {
        setSelectedGrades((prev) => ({
            ...prev,
            [classId]: option ? option.value : null
        }));
    };

    return (
        <S.Layout>
            <S.ClassBox>
                {grades.map((grade) => (
                    <S.Container key={grade.id}>
                        <S.ClassName>{grade.subject_name}</S.ClassName>
                        <S.Credit>{grade.credit}</S.Credit>
                        <Select
                            options={gradeOptions}
                            value={gradeOptions.find(option => option.value === selectedGrades[grade.id]) || null}
                            onChange={(option) => handleGradeChange(grade.id, option)}
                            placeholder=" "
                            isSearchable={false}
                            styles={{
                                control: (base) => ({
                                    ...base,
                                    cursor: 'pointer',
                                    border: '1px solid #ffffff',
                                    width: '64px',
                                    fontSize: '11px'
                                }),
                                dropdownIndicator: (base) => ({
                                    ...base,
                                    padding: '2px',
                                }),
                            }}
                        />
                    </S.Container>
                ))}
            </S.ClassBox>
        </S.Layout>
    );
}

export default ClassContainer;
