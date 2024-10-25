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
          navigate(-1); 
    };

    const handleLogoClick = () => {
        navigate('/Mypage'); 
      };

    return(
        <S.Layout>
            <S.IconLayout>
                {/* {backarrow && (
                  <BackArrow width={'100%'} onClick={() => navigate('/home')}/>
                )} */}
                {backarrow && (
                  <S.ButtonLayout onClick={handleBackClick}>
                    <BackArrow width={'100%'}/>
                  </S.ButtonLayout>
                )}
                {catholiclogo1 && (<CatholicLogo width={'100%'} aria-label="Catholic Logo1"/>)}
            </S.IconLayout>
            <S.IconLayout>
                {catholiclogo2 && (<CatholicLogo width={'100%'} />)}
                {catholicnamelogo && (
                    <S.ButtonLayout onClick={handleLogoClick}>
                        <CatholicNameLogo width={'100%'}  />
                    </S.ButtonLayout>
                )}
            </S.IconLayout>
        </S.Layout>
    )
}



export default Header;


