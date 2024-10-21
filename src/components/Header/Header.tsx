import React from 'react';
import * as S from './Styles';
import { BackArrow, CatholicLogo, CatholicNameLogo } from '../../assets/icon';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

interface Prop {
    backarrow?: boolean;
    catholiclogo1?: boolean;
    catholiclogo2?: boolean;
    catholicnamelogo?: boolean;
}

const Header = ({ backarrow, catholiclogo1, catholiclogo2, catholicnamelogo}: Prop) => {
    const navigate = useNavigate();

    return(
        <S.Layout>
            <S.IconLayout>
                {backarrow && (
                  <BackArrow width={'100%'} onClick={() => navigate('/home')} />
                )}
                {catholiclogo1 && (<CatholicLogo width={'100%'} />)}
            </S.IconLayout>
            <S.IconLayout>
            {catholiclogo2 && (<CatholicLogo width={'100%'} />)}
            {catholicnamelogo && (<CatholicNameLogo width={'100%'} />)}
            </S.IconLayout>
        </S.Layout>
    )
}

export default Header;


