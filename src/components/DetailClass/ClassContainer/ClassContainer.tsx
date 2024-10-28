import React, { useState } from 'react';
import * as S from './Styles';
import { NotsaveClass, SaveClass } from '../../../assets/icon';

// subject 배열의 타입 정의
interface Subject {
    credit: number;
    name: string;
    bookmark: number;
}

interface Props {
    data: Subject[];
}

const ClassContainer: React.FC<Props> = ({ data }) => {
    const [savedClasses, setSavedClasses] = useState<Subject[]>(
        data.map(d => ({ ...d }))
    );

    const handleToggleSave = (index: number) => {
        setSavedClasses(prev =>
            prev.map((item, i) =>
                i === index ? { ...item, bookmark: item.bookmark === 1 ? 0 : 1 } : item
            )
        );
    };

    return(
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
}

export default ClassContainer;