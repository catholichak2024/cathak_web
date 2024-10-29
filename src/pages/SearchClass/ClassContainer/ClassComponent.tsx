import React, { useEffect, useState } from 'react';
import * as S from './Styles';
import { NotsaveClass, SaveClass } from '../../../assets/icon';

interface ClassData {
    name: string;
    credit: number;
    bookmark: boolean;
    id:number;
}

interface CulturalContainerProps {
    data: ClassData[];
}
const ClassComponent: React.FC<CulturalContainerProps> = ({ data }) => {
    return (
        <S.Layout>
            <S.ClassBox>
                {data.map((item) => (
                    <S.Container key={item.id} >
                        <S.ClassName>{item.name}</S.ClassName>
                        <S.Credit>{item.credit} 학점</S.Credit>
                        <S.IconWrapper>
                            {item.bookmark === true ? <SaveClass /> : <NotsaveClass />}
                        </S.IconWrapper>
                    </S.Container>
                ))}
            </S.ClassBox>
        </S.Layout>
    );
};

export default ClassComponent;