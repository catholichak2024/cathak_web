import React from 'react';
import * as S from './Styles';
import LimitCredit from './LimitCredit/LimitCredit';
import { BlackStar, Mascotsmall  } from '../../../assets/icon';
import { useNavigate } from 'react-router-dom';

interface CreditSectionProps {
    getCredit: number;
}

const Credit: React.FC<CreditSectionProps> = ({ getCredit }) => {
    const navigate = useNavigate();
    
    return(
        <S.Layout >
            <S.CreditContainer onClick={() => navigate('/searchclass')}>
                <LimitCredit 
                    icon={<BlackStar style={{ width: '120%', marginRight: '-6px' }} />}
                    whatcredit="총 학점"
                    credit={getCredit}
                />
                <Mascotsmall />
            </S.CreditContainer>
        </S.Layout>
    )
}

export default Credit;