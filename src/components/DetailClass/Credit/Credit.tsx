import React from 'react';
import * as S from './Styles';
import LimitCredit from './LimitCredit/LimitCredit';
import { Star, LimitCreditIcon } from '../../../assets/icon';
const ClassList: React.FC = () => {
    return(
        <S.Layout>
            <S.CreditContainer>
                <LimitCredit 
                    icon={<LimitCreditIcon />}
                    whatcredit="최소이수학점"
                    credit={4}
                />
                <LimitCredit 
                    icon={<Star />}
                    whatcredit="취득학점"
                    credit={11}
                />
            </S.CreditContainer>
        </S.Layout>
    )
}

export default ClassList;