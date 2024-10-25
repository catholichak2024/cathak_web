import React, { useState } from 'react';
import * as S from './Styles';
import { useNavigate } from 'react-router-dom';
import eggLogo from '../../../assets/login_image/egg_logo.svg'

const NextLogin: React.FC = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // 아이디 찾기/비밀번호 찾기 만든다면
  const handleFindIdClick = () => {
    navigate('/LoginFind'); 
  }; 

  const handleFindPwClick = () => {
    navigate('/SignupFind');  
  };

  const handleLogin = () => {
    if (username && password) {
      navigate('/home');
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
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <S.Input
          type="password"
          placeholder="비밀번호 입력"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <S.SaveButton onClick={handleLogin}>로그인</S.SaveButton>
          
        <S.LinkContainer>
            <S.LinkText onClick={handleFindIdClick}>아이디 찾기</S.LinkText>
            <S.Separator>|</S.Separator>
            <S.LinkText onClick={handleFindPwClick}>비밀번호 찾기</S.LinkText>
          </S.LinkContainer>
      </S.Bottom>
    </S.Layout>
  )
}

export default NextLogin;