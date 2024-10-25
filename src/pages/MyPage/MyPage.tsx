import React, { useState } from 'react';
import * as S from './StylesM';
import Header from '../../components/Header/Header';
import { Hayangi, Major_change, Password, MemberExit } from '../../assets/icon';
import { userInfoState } from '../../recoil/states/Userstate';
import { useRecoilValue } from 'recoil';
import MymajorCompo from './MymajorCompo/MymajorCompo';
import { useNavigate } from 'react-router-dom';

const Mypage: React.FC = () => {
  const user = useRecoilValue(userInfoState);
  const navigate = useNavigate();

  // 사용자 전공 상태에 따른 whataMajor 및 myMajor 설정
  const whataMajor: string[] = ['제 1전공'];
  const myMajor: string[] = [user.major];

  if (user.doubleMajor) {
    whataMajor.push('제 2전공');
    myMajor.push(user.doubleMajor);
  }

  if (user.minor) {
    whataMajor.push('부전공');
    myMajor.push(user.minor);
  }

  return (
    <S.Layout>
      <Header backarrow mypageText Logout/>
      <S.Top>
        <S.HayangiBox>
          <Hayangi />
        </S.HayangiBox>
        <S.UserName>{user.name}</S.UserName>  
      </S.Top>

      <S.Bottom>
        <S.Middle>
            <S.MajorBold>전공</S.MajorBold> 
            <S.GrandGoto onClick={() => navigate('/mypage/majorchange')}>
              <Major_change />
            </S.GrandGoto>
        </S.Middle>
        <MymajorCompo
                    whataMajor={whataMajor} 
                    myMajor={myMajor} 
              />
        <S.AccountBold>계정</S.AccountBold>
        <S.MyIdBox>
            <S.IdInfoText>아이디</S.IdInfoText> 
            <S.IdInfo>{user.id}</S.IdInfo>
        </S.MyIdBox>
        <S.passwordBox>
          <Password />
        </S.passwordBox>
        <S.exitMember>
          <MemberExit />
        </S.exitMember>
      </S.Bottom>
    </S.Layout>
  );
}; 

export default Mypage;
