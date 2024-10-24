import React from 'react';
import * as S from './Styles';
import LimitGrade from './GradeCompo/LimitCredit/LimitGrade';
import { BlackStar, Badge } from '../../../assets/icon';

interface CreditSectionProps {
    totalgrade: number;
    majorgrade: number;
}

const Grade: React.FC<CreditSectionProps> = ({ totalgrade, majorgrade }) => {
    return(
        <S.Layout>
            <S.CreditContainer>
                <LimitGrade 
                    icon={<BlackStar />}
                    whatcredit="총 성적"
                    credit={totalgrade}
                />
                <LimitGrade 
                    icon={<Badge />}
                    whatcredit="전공 성적"
                    credit={majorgrade}
                />
            </S.CreditContainer>
        </S.Layout>
    )
}

export default Grade;