// Home.tsx
import React, { useEffect, useState } from 'react';
import * as S from './Styles';
import Header from '../../components/Header/Header';
import { Mascothayangi, Ellipse, GradeManage } from '../../assets/icon';
import HomeTypeCompo from './HomeTypeCompo/HomeTypeCompo';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import Credit from './TotalCreditInfo/Credit';
import Grade from './TotalGrade/Grade';
import { useNavigate } from 'react-router-dom';
import { accessTokenState } from '../../recoil/states/Loginstate';
import { CreditData } from '../../recoil/types/CreditData';

const Home: React.FC = () => {
  const [myCredit, setMyCredit] = useState<CreditData | null>(null);
  const accessToken = useRecoilValue(accessTokenState); // Recoil 상태에서 토큰 가져오기
  const navigate = useNavigate();

  const handleCategoryClick = (category: string) => {
    if (category === '교양') {
      navigate('/detailclass/general');
    } else if (category === '전공기초') {
      navigate('/detailclass/majorbasic');
    } else if (category === '전공') {
      navigate('/detailclass/major');
    }
  };

  useEffect(() => {
    // 사용자 데이터 가져오기 함수
    const fetchUserCreditData = async () => {
      try {
        const token = accessToken;
        if (!token) {
          console.error("토큰이 없습니다.");
          return;
        }

        console.log("사용할 토큰:", token);
        const response = await fetch('https://www.everygrade.store/EveryGrade/home', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
            console.log("서버 응답 전체 데이터:", data);  // 전체 응답 데이터를 확인합니다.
            
        if (data?.data) {
              setMyCredit({
                userName: data.data.userName, // 이름 필드
                totalCredits: data.data.totalCredits,
                culturalCourses: data.data.culturalCourses,
                majorFoundationCourses: data.data.majorFoundationCourses,
                majorCourses: data.data.majorCourses,
                totalGPA: data.data.totalGPA,
                majorGPA: data.data.majorGPA,
              });
            } else {
          console.error("Unexpected data structure:", data);
         }
        } else {
          console.error('유저 데이터 가져오기 실패:', response.status);
        }
      } catch (error) {
        console.error('유저 데이터 가져오기 실패:', error);
      }
    };

    fetchUserCreditData();
  }, [accessToken]);

  const totalCredits = myCredit?.totalCredits || 0;
  const culturalCourses = myCredit?.culturalCourses || "0";
  const majorFoundationCourses = myCredit?.majorFoundationCourses || 0;
  const majorCourses = myCredit?.majorCourses || "0";
  const totalGPA = myCredit?.totalGPA || "0.0";
  const majorGPA = myCredit?.majorGPA || "0.0";

  return (
    <S.Layout>
      <Header catholiclogo1 catholicnamelogo />
      <S.Top>
        <Ellipse />
        <S.Mascot>
          <Mascothayangi />
        </S.Mascot>
        <S.Detail>
          <S.UserName>{myCredit?.userName || "이름 없음"}</S.UserName>
          <HomeTypeCompo 
            types={['교양', '전공기초', '전공']} 
            credit={[
              { type: '교양', credit: culturalCourses },
              { type: '전공기초', credit: majorFoundationCourses },
              { type: '전공', credit: majorCourses },
            ]}
            onTypeClick={handleCategoryClick} 
          />
        </S.Detail>
      </S.Top>
      <S.Bottom>
        <S.GrandGoto onClick={() => navigate('/scoreInfo')}>
          <GradeManage />
        </S.GrandGoto>
        <Credit getCredit={totalCredits} />
        <Grade totalgrade={totalGPA} majorgrade={majorGPA} />
      </S.Bottom>
    </S.Layout>
  );
};

export default Home;
