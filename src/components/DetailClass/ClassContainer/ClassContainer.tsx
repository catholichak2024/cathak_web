import React, { useState, useEffect } from 'react';
import * as S from './Styles';
import { NotsaveClass, SaveClass } from '../../../assets/icon';

interface Subject {
    credit: number;
    name: string;
    bookmark: number;
}

interface Props {
    data: Subject[];
}

const ClassContainer: React.FC<Props> = ({ data }) => {
    const [savedClasses, setSavedClasses] = useState<Subject[]>([]);

    // data prop이 변경될 때마다 savedClasses 상태 업데이트
    useEffect(() => {
        setSavedClasses(data.map(d => ({ ...d })));
    }, [data]);

    const handleToggleSave = (index: number) => {
        setSavedClasses(prev =>
            prev.map((item, i) =>
                i === index ? { ...item, bookmark: item.bookmark === 1 ? 0 : 1 } : item
            )
        );
    };

    return (
        <S.Layout>
            {savedClasses.map((d, index) => (
                <S.Container key={index}>
                    <S.ClassName>{d.name}</S.ClassName>
                    <S.Credit>{d.credit}학점</S.Credit>
                    <S.IconWrapper onClick={() => handleToggleSave(index)}>
                        {d.bookmark === 1 ? (
                            <SaveClass style={{ cursor: 'pointer' }} />
                        ) : (
                            <NotsaveClass style={{ cursor: 'pointer' }} />
                        )}
                    </S.IconWrapper>
                </S.Container>
            ))}
        </S.Layout>
    );
};

export default ClassContainer;
