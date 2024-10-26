import React, { useEffect, useState } from 'react';
import * as S from './Styles';
import { NotsaveClass, SaveClass } from '../../../assets/icon';

interface ClassData {
    name: string;
    credit: number;
    bookmark: boolean;
}

const MajorContainer: React.FC = () => {
    const [classData, setClassData] = useState<ClassData[]>([]);

    // 서버에서 데이터 가져오기
    useEffect(() => {
        const fetchClassData = async () => {
            const token = localStorage.getItem('token');
            try {
                const response = await fetch('http://13.125.38.246:3000/EveryGrade/major', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });
                if (!response.ok) {
                    throw new Error('데이터를 가져오는 데 실패했습니다.');
                }
                const result = await response.json();
                setClassData(result.data as ClassData[]);
            } catch (error) {
                console.error('API 요청 중 오류 발생:', error);
            }
        };

        fetchClassData();
    }, []);

    // 북마크 상태 변경 함수
    const handleToggleSave = (index: number): void => {
        setClassData((prevData) => 
            prevData.map((item, idx) => 
                idx === index ? { ...item, bookmark: !item.bookmark } : item
            )
        );
    };

    return (
        <S.Layout>
            <S.ClassBox>
                {classData.map((d, index) => (
                    <S.Container key={index}>
                        <S.ClassName>{d.name}</S.ClassName>
                        <S.Credit>{d.credit}학점</S.Credit>
                        <S.IconWrapper onClick={() => handleToggleSave(index)}>
                            {d.bookmark ? (
                                <SaveClass style={{ cursor: 'pointer' }} />
                            ) : (
                                <NotsaveClass />
                            )}
                        </S.IconWrapper>
                    </S.Container>
                ))}
            </S.ClassBox>
        </S.Layout>
    );
};

export default MajorContainer;
