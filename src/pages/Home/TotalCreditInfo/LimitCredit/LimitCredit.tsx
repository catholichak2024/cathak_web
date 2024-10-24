import React from 'react';
import * as S from './Styles';


const LimitCredit: React.FC<{ icon : React.ReactNode ,credit : number, whatcredit: string }> = ({ icon, credit, whatcredit }) => {
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
                <S.CreditText>/130</S.CreditText>
            </S.NumberCreditContainer>
        </S.Layout>
    )
}

export default LimitCredit;
