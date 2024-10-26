import React from 'react';
import * as S from './Styles';
import LimitGrade from './GradeCompo/LimitCredit/LimitGrade';
import { BlackStar, Badge } from '../../../assets/icon';

interface CreditSectionProps {
    totalgrade: string | number; // string 또는 number 타입 허용
    majorgrade: string | number; // string 또는 number 타입 허용
}

const Grade: React.FC<CreditSectionProps> = ({ totalgrade, majorgrade }) => {
    return(
        <S.Layout>
            <S.CreditContainer>
                <LimitGrade 
                    icon={<BlackStar style={{ width: '120%', marginRight: '-6px' }} />}
                    whatcredit="총 성적"
                    credit={totalgrade}
                />
                <LimitGrade 
                    icon={<Badge style={{ width: '300%', marginBottom: '2.2px', marginLeft: '-5px' }} />}
                    whatcredit="전공 성적"
                    credit={majorgrade}
                />
            </S.CreditContainer>
        </S.Layout>
    )
}

export default Grade;