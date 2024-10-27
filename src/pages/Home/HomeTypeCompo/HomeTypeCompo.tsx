import React from 'react';
import * as S from './Styles';

type ClassTypeProps = {
    types: string[]; // 각 타입 (교양, 전공기초, 전공)
    credit: { type: string; credit: number | string }[]; // 타입별 학점 정보 (number 또는 string)
    onTypeClick: (type: string) => void; // 타입 클릭 핸들러
};

const HomeTypeCompo: React.FC<ClassTypeProps> = ({ types, credit, onTypeClick }) => {
    return (
        <S.Layout>
            {types.map((type, index) => (
                <S.NumberCreditContainer key={index} onClick={() => onTypeClick(type)}>
                    <S.TextContainer>
                        <S.WhatCreditText>{type}</S.WhatCreditText>
                        <S.Credit>
                            {credit.find(c => c.type === type)?.credit || 0} {/* 해당 타입의 학점을 출력 */}
                        </S.Credit>
                    </S.TextContainer>
                    {(type === '교양' || type === '전공기초') && <S.VerticalLine />}
                </S.NumberCreditContainer>
            ))}
        </S.Layout>
    );
};

export default HomeTypeCompo;
