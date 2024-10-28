import React, { useEffect, useState } from 'react';
import * as S from './Styles';
import Header from '../../components/Header/Header';
import { Hayangi, Major_change, Password, MemberExit } from '../../assets/icon';
import { userDataState } from '../../recoil/states/MyPageData';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import MymajorCompo from './MymajorCompo/MymajorCompo';
import { useNavigate } from 'react-router-dom';
import { UserData } from '../../recoil/types/Mypage';
import { accessTokenState } from '../../recoil/states/Loginstate';

const MyPage: React.FC = () => {
  const user = useRecoilValue(userDataState);
  const setUserData = useSetRecoilState(userDataState); 
  const navigate = useNavigate();
  const [MyUserData, setMyUserData] = useState<UserData | null>(null);
  const accessToken = useRecoilValue(accessTokenState);
  const handlePasswordClick = () => {
    navigate('/mypage/password'); // /mypage/password로 이동
  };
  
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = accessToken;
        if (!token) {
          throw new Error("토큰이 없습니다.");
        }
  
        console.log("사용할 토큰:", token);
        const response = await fetch('http://13.125.38.246:3000/EveryGrade/mypage', {
  
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `${token}`,
          },
        });
        
      // 상태 코드에 따라 분기 처리
      if (response.ok) {
        // 성공 (200-299)
        const data = await response.json();
        setMyUserData(data);
        console.log("유저 데이터 가져오기 성공:", data);
      } else if (response.status === 401) {
        console.error("401 Unauthorized: 인증 토큰이 만료되었거나 올바르지 않습니다.");
      } else if (response.status === 403) {
        console.error("403 Forbidden: 권한이 부족합니다.");
      } else if (response.status === 500) {
        console.error("500 Internal Server Error: 서버 내부 오류가 발생했습니다.");
      } else {
        console.error(`요청 실패: 상태 코드 ${response.status}`);
      }
    } catch (error) {
      console.error('유저 데이터 가져오기 실패:', error);
    }
  };
  
    fetchUserData(); // 함수 호출
  }, [accessToken]);


  const whataMajor: string[] = [];
  const myMajor: string[] = [];

  if (MyUserData?.major_type === "전공심화") {
    whataMajor.push('제 1전공');
    myMajor.push(MyUserData.major1);
  } else if (MyUserData?.major_type === "복수전공") {
    whataMajor.push('제 1전공');
    myMajor.push(MyUserData.major1);
    whataMajor.push('제 2전공');
    myMajor.push(MyUserData.major2 || '');
  }

  if (user?.minor) {
    whataMajor.push('부전공');
    myMajor.push(user.minor);
  }

  return (
    <S.Layout>
      <Header backarrow mypageText Logout />
      <S.Top>
        <S.HayangiBox>
          <Hayangi />
        </S.HayangiBox>
        <S.UserName>{MyUserData?.name}</S.UserName>
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
          <S.IdInfo>{MyUserData?.id}</S.IdInfo>
        </S.MyIdBox>
        <S.passwordBox>
          <Password onClick={handlePasswordClick} style={{ cursor: 'pointer' }} />
        </S.passwordBox>
        <S.exitMember>
          <MemberExit />
        </S.exitMember>
      </S.Bottom>
    </S.Layout>
  );
};

export default MyPage;
