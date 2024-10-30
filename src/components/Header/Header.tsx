import React from 'react';
import * as S from './Styles';
import { BackArrow, CatholicLogo, CatholicNameLogo, Logout } from '../../assets/icon';
import { useNavigate, useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';

interface Prop {
    backarrow?: boolean;
    catholiclogo1?: boolean;
    catholiclogo2?: boolean;
    catholicnamelogo?: boolean;
    Logout?: boolean;
    mypageText?: boolean;
    majorchange?: boolean;
}

const Header = ({ backarrow, catholiclogo1, catholiclogo2, catholicnamelogo, Logout, mypageText, majorchange}: Prop) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleBackClick = () => {
        if (location.pathname === '/mypage/majorchange') {
            navigate('/mypage'); 
        } else if (
            location.pathname === '/LoginFind' || 
            location.pathname === '/SignupFind' || 
            location.pathname === '/Signup' // 세 경로에서 실행될 때
        ) {
            navigate('/Login'); // '/Login'으로 이동
        } else {
            navigate('/home'); 
        }
    };
    

    const handleLogoClick = () => {
        navigate('/Mypage'); 
      };

      const handleLogoutClick = () => {
        // 로그아웃 버튼 클릭 시 커스텀 이벤트 생성 및 디스패치
        const logoutEvent = new CustomEvent('logoutClick'); 
        window.dispatchEvent(logoutEvent); 
      };

    return(
        <S.Layout>
            <S.IconLayout>
                {backarrow && (
                  <S.ButtonLayout onClick={handleBackClick}>
                    <BackArrow width={'100%'}/>
                  </S.ButtonLayout>
                )}
                {catholiclogo1 && (<CatholicLogo width={'100%'} aria-label="Catholic Logo1"/>)}
            </S.IconLayout>
            <S.IconLayout>
                {mypageText && (
                    <S.ConditionText>마이페이지</S.ConditionText>
                )}
                {majorchange && (
                    <S.ConditionText>전공변경</S.ConditionText>
                )}
            </S.IconLayout>
            <S.IconLayout>
                {catholiclogo2 && (<CatholicLogo width={'100%'} />)}
                {catholicnamelogo && (
                    <S.ButtonLayout onClick={handleLogoClick}>
                        <CatholicNameLogo width={'100%'}  />
                    </S.ButtonLayout>
                )}
                {Logout && ( 
                    <S.LogoutText onClick={handleLogoutClick}>로그아웃</S.LogoutText>
                )}
            </S.IconLayout>
        </S.Layout>
    )
}



export default Header;


