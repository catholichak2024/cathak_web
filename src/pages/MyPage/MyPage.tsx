import React, { useEffect, useState } from 'react';
import * as S from './Styles';
import Header from '../../components/Header/Header';
import { Hayangi, Major_change, Password, MemberExit } from '../../assets/icon';
import { userInfoState } from '../../recoil/states/MyPageData';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import MymajorCompo from './MymajorCompo/MymajorCompo';
import { useNavigate } from 'react-router-dom';
import { UserData } from '../../recoil/types/Mypage';
import { accessTokenState } from '../../recoil/states/Loginstate';

const MyPage: React.FC = () => {
  const setUserInfo = useSetRecoilState(userInfoState);
  const navigate = useNavigate();
  const [MyUserData, setMyUserData] = useState<UserData | null>(null);
  const accessToken = useRecoilValue(accessTokenState);
  const [showPopup, setShowPopup] = useState(false);

  const handlePasswordClick = () => {
    navigate('/mypage/password');
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = accessToken;
        if (!token) {
          throw new Error('토큰이 없습니다.');
        }

        const response = await fetch('https://www.everygrade.store/EveryGrade/mypage', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          if (data?.result?.userData) {
            setMyUserData(data.result.userData);
            setUserInfo({ name: data.result.userData.name });
          } else {
            console.error('유효하지 않은 데이터 구조:', data);
          }
        } else {
          console.error(`요청 실패: 상태 코드 ${response.status}`);
        }
      } catch (error) {
        console.error('유저 데이터 가져오기 실패:', error);
      }
    };

    fetchUserData(); // 함수 호출
  }, [accessToken, setUserInfo]);

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
  } else if (MyUserData?.major_type === "부전공") {
    whataMajor.push('제 1전공');
    myMajor.push(MyUserData.major1);
    whataMajor.push('부전공');
    myMajor.push(MyUserData.minor || '');
  }


  useEffect(() => {
    // Logout 버튼에 이벤트 리스너 추가
    const logoutButton = document.querySelector('.logout-button');
    if (logoutButton) {
      logoutButton.addEventListener('click', () => setShowPopup(true));
    }

    // Cleanup 함수로 이벤트 리스너 제거
    return () => {
      if (logoutButton) {
        logoutButton.removeEventListener('click', () => setShowPopup(true));
      }
    };
  }, []);

  const handleConfirmLogout = () => {
    // 로그아웃 로직 처리
    setUserInfo(null);
    setShowPopup(false);
  };

  return (
    <S.Layout>
      <Header backarrow mypageText Logout />
      <S.Top>
        <S.HayangiBox>
          <Hayangi />
        </S.HayangiBox>
        <S.UserName>{MyUserData?.name || '이름 없음'}</S.UserName>
      </S.Top>
      <S.Bottom>
        <S.Middle>
          <S.MajorBold>전공</S.MajorBold>
          <S.GrandGoto onClick={() => navigate('/mypage/majorchange')}>
            <Major_change />
          </S.GrandGoto>
        </S.Middle>
        <MymajorCompo 
          whataMajor={['전공심화']} 
          myMajor={['컴퓨터정보공학부']} />
        <S.AccountBold>계정</S.AccountBold>
        <S.MyIdBox>
          <S.IdInfoText>아이디</S.IdInfoText>
          <S.IdInfo>{MyUserData?.id || '아이디 없음'}</S.IdInfo>
        </S.MyIdBox>
        <S.passwordBox>
          <Password onClick={handlePasswordClick} style={{ cursor: 'pointer' }} />
        </S.passwordBox>
        <S.exitMember>
          <MemberExit />
        </S.exitMember>
      </S.Bottom>
      {showPopup && (
        <S.PopupOverlay onClick={() => setShowPopup(false)}>
          <S.PopupContent type="default" onClick={(e) => e.stopPropagation()}>
          <S.PopupTitle type="default">로그아웃</S.PopupTitle>
            <S.PopupDescription>로그아웃 하시겠습니까?</S.PopupDescription>
            <S.ButtonContainer>
              <S.CloseButton type="default" onClick={() => setShowPopup(false)}>닫기</S.CloseButton>
              <S.ConfirmButton type="default" onClick={handleConfirmLogout}>확인</S.ConfirmButton>
            </S.ButtonContainer>
          </S.PopupContent>
        </S.PopupOverlay>
      )}
    </S.Layout>
  );
};

export default MyPage;
