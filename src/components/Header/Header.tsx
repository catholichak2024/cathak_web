import React from 'react';
import * as S from './Styles';
import { BackArrow, CatholicLogo, CatholicNameLogo } from '../../assets/icon';
import { useNavigate, useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';

interface Prop {
    backarrow?: boolean;
    catholiclogo1?: boolean;
    catholiclogo2?: boolean;
    catholicnamelogo?: boolean;
}

const Header = ({ backarrow, catholiclogo1, catholiclogo2, catholicnamelogo}: Prop) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleBackClick = () => {
        if (location.pathname === '/mypage/majorchange') {
          navigate('/mypage'); 
        } else {
          navigate('/home'); 
        }
    };

    const handleLogoClick = () => {
        navigate('/Mypage'); 
      };

    return(
        <S.Layout>
            <S.IconLayout>
                {backarrow && (
                  <BackArrow width={'100%'} onClick={handleBackClick} />
                )}
                {catholiclogo1 && (<CatholicLogo width={'100%'} aria-label="Catholic Logo1"/>)}
            </S.IconLayout>
            <S.IconLayout>
                {catholiclogo2 && (<CatholicLogo width={'100%'} />)}
                {catholicnamelogo && (<CatholicNameLogo width={'100%'} aria-label="Catholic Name Logo" onClick={handleLogoClick}/>)}
            </S.IconLayout>
        </S.Layout>
    )
}



export default Header;


