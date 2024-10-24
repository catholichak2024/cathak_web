import React from 'react';
import * as S from './Styles';
import LimitCredit from './LimitCredit/LimitCredit';
import { BlackStar, Mascotsmall  } from '../../../assets/icon';

interface CreditSectionProps {
    getCredit: number;
}

const Credit: React.FC<CreditSectionProps> = ({ getCredit }) => {
    return(
        <S.Layout>
            <S.CreditContainer>
                <LimitCredit 
                    icon={<BlackStar />}
                    whatcredit="총 학점"
                    credit={getCredit}
                />
                <Mascotsmall />
            </S.CreditContainer>
        </S.Layout>
    )
}

export default Credit;