import React from 'react';
import * as S from './Styles';
import LimitCredit from './LimitCredit/LimitCredit';
import { Star, LimitCreditIcon } from '../../../assets/icon';

interface CreditSectionProps {
    minimumCredit: number;
    getCredit: number;
}

const ClassList: React.FC<CreditSectionProps> = ({ minimumCredit, getCredit }) => {
    return(
        <S.Layout>
            <S.CreditContainer>
                <LimitCredit 
                    icon={<LimitCreditIcon />}
                    whatcredit="최소이수학점"
                    credit={minimumCredit}
                />
                <LimitCredit 
                    icon={<Star />}
                    whatcredit="취득학점"
                    credit={getCredit}
                />
            </S.CreditContainer>
        </S.Layout>
    )
}

export default ClassList;