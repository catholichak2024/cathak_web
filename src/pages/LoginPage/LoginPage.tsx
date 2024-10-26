import React from 'react';
import * as S from './Styles';
import { useNavigate } from 'react-router-dom';
import eggLogo from '../../assets/login_image/egg_logo.svg'
import eggLogin from '../../assets/login_image/egg_login.svg'
import eggSignup from '../../assets/login_image/egg_signup.svg'

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/Login/NextLogin');  
  };

  const handleSignupClick = () => {
    navigate('/Signup')
  }

  return (
    <S.Layout>
      <S.Top>
        <S.TopText1>꼼꼼한 대학생활을 위해,</S.TopText1>
        <S.TopText2>EVERY <br /> GRADE</S.TopText2>
      </S.Top>

      <S.Middle>
        <S.EggLogo src={eggLogo} alt="egg Logo" />
      </S.Middle>

      <S.Bottom>
        <S.BottomImage1 
          src={eggLogin}  
          alt="login Image"
          onClick={handleLoginClick} 
        />
        <S.BottomImage2 
          src={eggSignup}
          alt="signup Image" 
          onClick={handleSignupClick}
        />
      </S.Bottom>
    </S.Layout>
  )
}

export default Login;