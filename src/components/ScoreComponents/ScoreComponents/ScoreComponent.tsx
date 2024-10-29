import React, { useEffect, useState } from 'react';
import * as S from './Styles';
import ScoreClassBox from './ScoreClassBox/ScoreClassBox';
import { accessTokenState } from '../../../recoil/states/Loginstate';
import { useRecoilState, useRecoilValue } from 'recoil';

interface GradeData {
    id: number;
    subject_name: string;
    str_score: string | null;
    credit: number;
}

const ScoreComponent: React.FC = () => {
    const [grades, setGrades] = useState<GradeData[]>([]);
    const [selectedGrades, setSelectedGrades] = useState<{ [key: number]: string | null }>({});
    const accessToken = useRecoilValue(accessTokenState);

    
    useEffect(() => {
        const fetchGrades = async () => {
            try {
                const response = await fetch('https://www.everygrade.store/EveryGrade/grade', {
                    method: 'GET',
                    headers: {
                        Authorization: `${accessToken}`,
                        'Content-Type': 'application/json',
                    },
                });
    
                if (!response.ok) {
                    throw new Error(`Failed to fetch grades: ${response.status}`);
                }
    
                const data = await response.json();
                console.log('Fetched grade data:', data);
                
                const fetchedGrades = Array.isArray(data.result.gradeData) ? data.result.gradeData : [];
                setGrades(fetchedGrades);

                const initialSelectedGrades = fetchedGrades.reduce((acc: { [key: number]: string | null }, grade: GradeData) => {
                    acc[grade.id] = grade.str_score;
                    return acc;
                }, {});
                
                setSelectedGrades(initialSelectedGrades);
            } catch (error) {
                console.error('Error fetching grades:', error);
                setGrades([]); // 오류 발생 시 빈 배열로 설정
            }
        };
    
        fetchGrades();
    }, [accessToken]);

    const handleSave = async () => {
        try {
            const response = await fetch('http://13.125.38.246:3000/EveryGrade/grade', {
                method: 'PATCH',
                headers: {
                    Authorization: `${accessToken}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    subjects: Object.entries(selectedGrades).map(([classId, str_score]) => ({
                        subject_name: grades.find(grade => grade.id === Number(classId))?.subject_name || '',
                        score: str_score || "N/A",
                    })),
                }),
            });

            if (!response.ok) {
                throw new Error(`Failed to save grades: ${response.status}`);
            }

            const result = await response.json();
            console.log('Grades saved successfully:', result);
        } catch (error) {
            console.error('Error saving grades:', error);
        }
    };

    return (
        <S.Layout>
            <S.ScoreContainer>
                <S.ScoreText>성적관리</S.ScoreText>
                
                {grades.length === 0 ? (
                    <S.NoDataMessage>수업 내역이 없습니다.</S.NoDataMessage>
                ) : (
                    <ScoreClassBox
                        grades={grades}
                        selectedGrades={selectedGrades}
                        setSelectedGrades={setSelectedGrades}
                    />
                )}
                
                <S.SaveButton onClick={handleSave}>저장</S.SaveButton>
            </S.ScoreContainer>
        </S.Layout>
    );
};

export default ScoreComponent;
