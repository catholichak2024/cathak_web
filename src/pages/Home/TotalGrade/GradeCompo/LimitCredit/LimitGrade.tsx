import React from 'react';
import * as S from './Styles';


const LimitGrade: React.FC<{ icon : React.ReactNode ,credit : number, whatcredit: string }> = ({ icon, credit, whatcredit }) => {
    return(
        <S.Layout>
            <S.CreditContainer>
                <S.IconBox>
                    {icon}
                </S.IconBox>
                <S.WhatCreditText>{whatcredit}</S.WhatCreditText>
            </S.CreditContainer>
            <S.NumberCreditContainer>
                <S.Credit>{credit}</S.Credit>
                <S.CreditText>/4.5</S.CreditText>
            </S.NumberCreditContainer>
        </S.Layout>
    )
}

export default LimitGrade;
