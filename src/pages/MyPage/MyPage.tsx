import React, { useEffect } from 'react';
import * as S from './Styles';
import Header from '../../components/Header/Header';
import { Hayangi, Major_change, Password, MemberExit } from '../../assets/icon';
import { userDataState } from '../../recoil/states/MyPageData';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import MymajorCompo from './MymajorCompo/MymajorCompo';
import { useNavigate } from 'react-router-dom';
import { fetchUserData } from '../../apis/MyPage'; // 사용자 데이터 가져오는 함수 import

const MyPage: React.FC = () => {
  const user = useRecoilValue(userDataState);
  const setUserData = useSetRecoilState(userDataState); // Recoil 상태 업데이트 함수
  const navigate = useNavigate();

  useEffect(() => {
    const userId = "catholic1"; // 여기서 사용자 ID를 가져오는 방법을 적절히 설정하세요.
    const getUserData = async () => {
      try {
        const data = await fetchUserData(userId);
        setUserData(data); // 가져온 데이터로 userDataState 업데이트
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    getUserData();
  }, [setUserData]);

  const whataMajor: string[] = [];
  const myMajor: string[] = [];

  if (user?.major_type === "전공") {
    whataMajor.push('제 1전공');
    myMajor.push(user.major1);
  } else if (user?.major_type === "복수전공") {
    whataMajor.push('제 1전공');
    myMajor.push(user.major1);
    whataMajor.push('제 2전공');
    myMajor.push(user.major2 || '');
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
        <S.UserName>{user?.name}</S.UserName>
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
          <S.IdInfo>{user?.id}</S.IdInfo>
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

export default MyPage;
