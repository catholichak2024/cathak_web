import React, { useEffect, useState } from 'react';
import * as S from './Styles';
import ScoreClassBox from './ScoreClassBox/ScoreClassBox';
import { accessTokenState } from '../../../recoil/states/Loginstate';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';

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
    const navigate=useNavigate();
    
    
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
    
        

    useEffect(() => {
        fetchGrades();
    }, []);

    const handleSave = async () => {

        // 키 값 중복 제거
        const uniqueGrades = grades.filter((grade, index, self) =>
        index === self.findIndex((g) => (
            g.id === grade.id
        ))
        );

        // 요청 body에 보낼 데이터 준비
        const requestBody = JSON.stringify({
            subjects: uniqueGrades.map((grade) => ({
                subject_name: grade.subject_name,
                score: selectedGrades[grade.id] ?? null,
                // score: selectedGrades[grade.id] || "N/A", // selectedGrades에서 grade id로 score 가져오기
            })),
        });

        
        console.log("Request Body:", requestBody); 

        try {
            const response = await fetch('https://www.everygrade.store/EveryGrade/grade', {
                method: 'PATCH',
                headers: {
                    Authorization: `${accessToken}`,
                    'Content-Type': 'application/json',
                },
                body: requestBody,
            });
            
            if (!response.ok) {
                const errorText = await response.text();
                console.error(`Failed to save grades: Status ${response.status} - ${response.statusText}`);
                console.error("Server Response:", errorText);
                throw new Error(`Failed to save grades: Status ${response.status}`);
            }

            const result = await response.json();
            console.log('Grades saved successfully:', result);
            // 저장 후 최신 데이터를 다시 가져오기
            // await fetchGrades();
            navigate('/home');
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
