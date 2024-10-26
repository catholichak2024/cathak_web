// MajorSelectCompo.tsx
import React from 'react';
import * as S from './Styles';

type MajorSelectProps = {
    types: string[]; // 각 타입 (전공심화, 복수전공, 부전공)
    onTypeClick: (type: string) => void;
    selectedCategory: string | null;
};

const MajorSelectCompo: React.FC<MajorSelectProps> = ({ types, onTypeClick, selectedCategory }) => {
    return (
        <S.Layout>
            {types.map((type, index) => (
                <S.MajorSelectContainer 
                    key={index} 
                    onClick={() => onTypeClick(type)}
                >
                    <S.TextContainer selected={selectedCategory === type}>
                        <S.WhatMajorText selected={selectedCategory === type}>{type}</S.WhatMajorText>
                    </S.TextContainer>
                </S.MajorSelectContainer>
            ))}
        </S.Layout>
    );
};

export default MajorSelectCompo;
