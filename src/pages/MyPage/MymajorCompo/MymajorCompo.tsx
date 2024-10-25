import React from 'react';
import * as S from './Styles';
import { Star } from '../../../assets/icon';

type ClassTypeProps = {
    whataMajor: string[]; // 각 타입 (제 1전공, 2전공, 부전공)
    myMajor: string[];
};

const MymajorCompo: React.FC<ClassTypeProps> = ({ whataMajor,myMajor }) => {
    return (
        <S.Layout>
            {whataMajor.map((major, index) => (
                <S.MymajorContainer key={index} >
                    {(major === '제 2전공' || major === '부전공') && <S.VerticalLine />}
                    <S.TextContainer>
                        <S.CreditContainer>
                            <S.IconBox>
                                <Star />
                            </S.IconBox>
                            <S.WhatCreditText>{major}</S.WhatCreditText>
                        </S.CreditContainer>
                        <S.MyMajorText>{myMajor[index]}</S.MyMajorText>
                    </S.TextContainer>
                </S.MymajorContainer>
            ))}
        </S.Layout>
    );
};

export default MymajorCompo;