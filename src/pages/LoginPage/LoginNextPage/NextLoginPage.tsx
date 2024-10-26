import React, { useState } from 'react';
import * as S from './Styles';
import { useNavigate } from 'react-router-dom';
import eggLogo from '../../../assets/login_image/egg_logo.svg';
import { useRecoilState } from 'recoil';
import { loginState } from '../../../recoil/states/Loginstate';
import { useRecoilState } from 'recoil';
import { userState, accessTokenState } from '../../../recoil/states/Loginstate';
import { getCookie } from '../../../utiles/UseCookies';

const NextLogin: React.FC = () => {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState); // 토큰 상태 관리
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useRecoilState(loginState);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  useEffect(() => {
    // 컴포넌트가 마운트될 때 로그인 정보를 초기화
    setLoginInfo({ id: '', pw: '' });
  }, [setLoginInfo]);

  const handleFindIdClick = () => {
    navigate('/LoginFind'); 
  };

  const handleFindPwClick = () => {
    navigate('/SignupFind');  
  };

  // 로그인 정보 유효성 검사 함수
  const validateLoginInfo = () => {
    if (!loginInfo.id) {
      setErrorMessage('아이디를 입력해주세요.');
      return false;
    }
    if (!loginInfo.pw) {
      setErrorMessage('비밀번호를 입력해주세요.');
      return false;
    }
    if (loginInfo.pw.length < 6) {
      setErrorMessage('비밀번호는 6자 이상이어야 합니다.');
      return false;
    }
    return true;
  };

  const handleLogin = async () => {
    if (!validateLoginInfo()) {
      return;
    }

    try {
      setIsLoggingIn(true);
      setErrorMessage('로그인 중입니다...');
      const response = await fetch('http://13.125.38.246:3000/EveryGrade/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: loginInfo.id,
          pw: loginInfo.pw,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('로그인 성공:', data);

        // 서버로부터 Authorization 헤더에서 토큰을 가져옵니다.
        const authHeader = response.headers.get('authorization');
        if (authHeader) {
          // Authorization 헤더에 있는 토큰에서 'Bearer ' 이후의 토큰 부분을 추출합니다.
          const token = authHeader.split(' ')[1];
          if (token) {
            localStorage.setItem('token', token);
            console.log('토큰 저장 완료:', token);
          } else {
            console.error('Authorization 헤더에 유효한 토큰이 없습니다.');
          }
        } else {
          console.error('Authorization 헤더가 응답에 없습니다.');
        }

        navigate('/home');
      } else {
        setErrorMessage('로그인 실패: 아이디나 비밀번호가 잘못되었습니다.');
      }
    } catch (error) {
      setErrorMessage('로그인 실패: 서버와의 연결에 문제가 발생했습니다.');
      console.error('네트워크 오류:', error);
    } finally {
      setIsLoggingIn(false);
    }
  };

  return (
    <S.Layout>
      <S.Top>
        <S.TopText>로그인을 해주세요</S.TopText>
      </S.Top>
  
      <S.Middle>
        <S.EggLogo src={eggLogo} alt="egg Logo" />
      </S.Middle>
  
      <S.Bottom>
        {errorMessage && <S.ErrorText>{errorMessage}</S.ErrorText>} 
        <S.Input
          type="text"
          placeholder="아이디 입력"
          value={userInfo?.id || ''}
          onChange={(e) => setUserInfo({ ...userInfo, id: e.target.value, pw: userInfo?.pw || '' })}
          autoComplete="off"
        />
        <S.Input
          type="password"
          placeholder="비밀번호 입력"
          value={userInfo?.pw || ''}
          onChange={(e) => setUserInfo({ ...userInfo, id: userInfo?.id || '', pw: e.target.value })}
          autoComplete="off"
        />
        <S.SaveButton onClick={handleLogin} disabled={isLoggingIn}>
          {isLoggingIn ? '로그인 중...' : '로그인'}
        </S.SaveButton>
        
        <S.LinkContainer>
          <S.LinkText onClick={handleFindIdClick}>아이디 찾기</S.LinkText>
          <S.Separator>|</S.Separator>
          <S.LinkText onClick={handleFindPwClick}>비밀번호 찾기</S.LinkText>
        </S.LinkContainer>
      </S.Bottom>
    </S.Layout>
  );
};

export default NextLogin;
