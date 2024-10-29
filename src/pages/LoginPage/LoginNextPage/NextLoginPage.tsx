import React, { useState } from 'react';
import * as S from './Styles';
import { useNavigate } from 'react-router-dom';
import eggLogo from '../../../assets/login_image/egg_logo.svg';
import { useRecoilState } from 'recoil';
import { userState, accessTokenState } from '../../../recoil/states/Loginstate';
import { getCookie, setCookie } from '../../../utiles/UseCookies';

const NextLogin: React.FC = () => {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState); // 토큰 상태 관리
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useRecoilState(userState); // 사용자 정보 관리
  const cookie = getCookie('access-Token');
  const [errorMessage, setErrorMessage] = useState('');

  const handleFindIdClick = () => {
    navigate('/LoginFind'); 
  };

  const handleFindPwClick = () => {
    navigate('/SignupFind');  
  };

  const handleLogin = async () => {
    if (userInfo?.id && userInfo?.pw) {
      try {
        setErrorMessage('로그인 중입니다...');
        localStorage.removeItem('token');
  
        const response = await fetch('https://www.everygrade.store/EveryGrade/user/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: userInfo.id,
            pw: userInfo.pw,
          }),
        });
  
        if (response.ok) {
          const data = await response.json();

  
          const token = response.headers.get('Authorization');
          if (token) {
            console.log('토큰이 응답 헤더에 존재합니다:', token);
            setCookie('access-token', token, { secure: false }); // 개발 환경에서 secure: false
            setAccessToken(token); // Recoil의 accessToken 상태 업데이트
            localStorage.setItem('token', token);
          } else {
            console.error('Token not found in response headers');
          }
  
          console.log('로그인 성공:', data);
          navigate('/home');
        } else {
          setErrorMessage('로그인 실패: 아이디나 비밀번호가 잘못되었습니다.');
        }
      } catch (error) {
        setErrorMessage('로그인 실패: 서버와의 연결에 문제가 발생했습니다.');
        console.error('네트워크 오류:', error);
      }
    } else {
      setErrorMessage('아이디와 비밀번호를 입력해주세요.');
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
        <S.SaveButton onClick={handleLogin}>로그인</S.SaveButton>
        
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
