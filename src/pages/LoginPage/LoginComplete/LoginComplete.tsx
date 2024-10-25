import React from 'react';
import * as S from './Styles';
import Header from '../../../components/Header/Header';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { userInfoState } from '../../../recoil/states/Userstate';
import loginPageGo from '../../../assets/login_image/login_page.svg';

const LoginComplete: React.FC = () => {
  const navigate = useNavigate();
  const userInfo = useRecoilValue(userInfoState);

  return (
    <S.Layout>
      <Header backarrow={true} />
      <S.Top>
        <S.TitleContainer>
          <S.TitleText>아이디 찾기</S.TitleText>
        </S.TitleContainer>

        <S.Description>
          입력하신 정보와<br />
          일치하는 아이디 정보입니다.
        </S.Description>
        <S.HorizontalLine />
      </S.Top>

      <S.Middle>
        <S.Label>에그 ID</S.Label>

        <S.UserInfoBox>
          <S.UserNameBox>{userInfo.name}</S.UserNameBox>
        </S.UserInfoBox>

        <S.SubmitButton onClick={() => navigate('/login')}>
          <img src={loginPageGo} alt="아이콘" />
        </S.SubmitButton>
      </S.Middle>
    </S.Layout>
  );
};

export default LoginComplete;
