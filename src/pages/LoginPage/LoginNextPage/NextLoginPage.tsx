import React, { useState } from 'react';
import * as S from './Styles';
import { useNavigate } from 'react-router-dom';
import eggLogo from '../../../assets/login_image/egg_logo.svg';
import { useRecoilState, useRecoilValueLoadable } from 'recoil';
import { loginState } from '../../../recoil/states/Loginstate';
import { loginInfoSelector } from '../../../recoil/selectors/LoginInfo';
import { LoginRequest } from '../../../recoil/types/loginTypes';

const NextLogin: React.FC = () => {
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useRecoilState(loginState);
  const loginInfoLoadable = useRecoilValueLoadable(loginInfoSelector);

  const [errorMessage, setErrorMessage] = useState('');

  const handleFindIdClick = () => {
    navigate('/LoginFind'); 
  };

  const handleFindPwClick = () => {
    navigate('/SignupFind');  
  };

  const handleLogin = async () => {
    if (loginInfo.id && loginInfo.pw) {
      try {
        setErrorMessage('로그인 중입니다...');
        const response = await fetch('/api/login', {
          method: 'GET',
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
      <S.Input
          type="text"
          placeholder="아이디 입력"
          value={loginInfo.id}
          onChange={(e) => setLoginInfo({ ...loginInfo, id: e.target.value })}
        />
        <S.Input
          type="password"
          placeholder="비밀번호 입력"
          value={loginInfo.pw}
          onChange={(e) => setLoginInfo({ ...loginInfo, pw: e.target.value })}
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
}

export default NextLogin;
