import React, { useEffect, useState } from 'react';
import * as S from './Styles';
import { NotsaveClass, SaveClass } from '../../../assets/icon';

interface ClassData {
    name: string;
    credit: number;
    bookmark: boolean;
    id: number;
}

interface ContainerProps {
    data: ClassData[];
}

const ClassComponent: React.FC<ContainerProps> = ({ data }) => {
    const [classData, setClassData] = useState(data);
    
    useEffect(() => {
        setClassData(data);
    }, [data]);

    const handleBookmarkToggle = async (id: number, currentBookmark: boolean) => {
        
        const updatedData = classData.map((item) =>
            item.id === id ? { ...item, bookmark: !currentBookmark } : item
        );
        setClassData(updatedData);

        try {
            // 서버에 북마크 상태 업데이트 요청
            if (currentBookmark) {
                await deleteBookmarkAPI(id);
            } else {
                await addBookmarkAPI(id);
            }
        } catch (error) {
            console.error('북마크 상태 업데이트 중 오류 발생:', error);
            // 오류 발생 시 이전 상태로 복구
            setClassData(classData.map((item) =>
                item.id === id ? { ...item, bookmark: currentBookmark } : item
            ));
        }
    };

    const addBookmarkAPI = async (id: number) => {
        const token = localStorage.getItem('token');
        const response = await fetch(`https://www.everygrade.store/EveryGrade/search/${id}`, {
            method: 'POST',
            headers: {
                Authorization: `${token}`,
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        console.log(data);
        if (!response.ok) {
            throw new Error('북마크 추가 실패');
        }
    };

    const deleteBookmarkAPI = async (id: number) => {
        const token = localStorage.getItem('token');
        const response = await fetch(`https://www.everygrade.store/EveryGrade/search/${id}`, {
            method: 'DELETE',
            headers: {
                Authorization: `${token}`,
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        console.log(data);
        if (!response.ok) {
            throw new Error('북마크 삭제 실패');
        }
    };

    return (
        <S.Layout>
            <S.ClassBox>
                {classData.length > 0 ? (
                    classData.map((item) => (
                        <S.Container key={item.id}>
                            <S.ClassName>{item.name}</S.ClassName>
                            <S.Credit>{item.credit} 학점</S.Credit>
                            <S.IconWrapper onClick={() => handleBookmarkToggle(item.id, item.bookmark)}>
                                {item.bookmark ? <SaveClass /> : <NotsaveClass />}
                            </S.IconWrapper>
                        </S.Container>
                    ))
                ) : (
                    <p>클래스 데이터가 없습니다.</p>
                )}
            </S.ClassBox>
        </S.Layout>
    );
};

export default ClassComponent;
