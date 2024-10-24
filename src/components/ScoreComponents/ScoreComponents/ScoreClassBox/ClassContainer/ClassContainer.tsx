import React, { useState } from 'react';
import Select from 'react-select'; // react-select 가져오기
import * as S from './Styles'; // Styles 파일에서 styled-components를 import
import { classInfoType } from '../../../../../recoil/types/classdetail';
import { userInfoType } from '../../../../../recoil/types/userdetail';

interface Props {
    data: classInfoType[];
    user: userInfoType;
}

// 드롭다운 옵션 정의 (영어로)
const gradeOptions = [
    { value: 4.5, label: 'A+' },
    { value: 4.0, label: 'A0' },
    { value: 3.5, label: 'B+' },
    { value: 3.0, label: 'B0' },
    { value: 2.5, label: 'C+' },
    { value: 2.0, label: 'C0' },
    { value: 1.5, label: 'D+' },
    { value: 1.0, label: 'D0' },
    { value: 0, label: 'F' }
];

const ClassContainer: React.FC<Props> = ({ data, user }) => {
    const [savedClasses, setSavedClasses] = useState<number[]>(user.attendedClasses);
    const [selectedGrades, setSelectedGrades] = useState<{ [key: number]: number | null }>({});

    const handleGradeChange = (classId: number, option: { value: number; label: string } | null) => {
        setSelectedGrades(prev => ({
            ...prev,
            [classId]: option ? option.value : null // 선택된 값을 숫자로 저장
        }));
    };

    return (
        <S.Layout>
            <S.ClassBox>
                {data.map((d) => (
                    <S.Container key={d.classId}>
                        <S.ClassName>{d.className}</S.ClassName>
                        <S.Credit>{d.credit}</S.Credit>
                        <Select
                            options={gradeOptions}
                            value={gradeOptions.find(option => option.value === selectedGrades[d.classId]) || null}
                            onChange={(option) => handleGradeChange(d.classId, option)} // 학점 변경 핸들러
                            placeholder=" "
                            styles={{
                                control: (base) => ({
                                    ...base,
                                    cursor: 'pointer',
                                    border: '1px solid #fffffff',
                                    width: '64px',
                                    fontSize: '11px'
                                }),
                                dropdownIndicator: (base) => ({
                                    ...base,
                                    padding: '2px', // 드롭다운 아이콘의 패딩 조정
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
