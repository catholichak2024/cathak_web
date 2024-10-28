// Home.tsx
import React, { useEffect, useState } from 'react';
import * as S from './Styles';
import Header from '../../components/Header/Header';
import { Mascothayangi, Ellipse, GradeManage } from '../../assets/icon';
import HomeTypeCompo from './HomeTypeCompo/HomeTypeCompo';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import Credit from './TotalCreditInfo/Credit';
import Grade from './TotalGrade/Grade';
import { useNavigate } from 'react-router-dom';
import { courseState } from '../../recoil/states/HomeStatae';
import { accessTokenState } from '../../recoil/states/Loginstate';
import { CreditData } from '../../recoil/types/CreditData';
import { error } from 'console';

const Home: React.FC = () => {
  const HomeTypeCompos = ['교양', '전공기초', '전공'];
  const [Mycredit, setMyCredit] = useState<CreditData | null>(null);
  const accessToken = useRecoilValue(accessTokenState); 
  const navigate = useNavigate();
  const setCourseData = useSetRecoilState(courseState);

  const handleCategoryClick = (category: string) => {
    if (category === '교양') {
      navigate('/detailclass/general');
    } else if (category === '전공기초') {
      navigate('/detailclass/majorbasic');
    } else if (category === '전공') {
      navigate('/detailclass/major12');
    }
  };

  useEffect(() => {
  // 사용자 데이터 가져오기
      const UserCreditData = async () => {
        try {
          const token =  localStorage.getItem('token'); // 토큰 가져오기
          if (!token) {
            throw new Error("토큰이 없습니다.");
          }

          console.log("사용할 토큰:", token);
          const response = await fetch('http://13.125.38.246:3000/EveryGrade/home', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`, 
            },
          });

          // 상태 코드에 따라 분기 처리
          if (response.ok) {
            const data = await response.json();
            setMyCredit({
              totalCredits: data.result.data.totalCredits,
              culturalCourses: data.result.data.culturalCourses,
              majorFoundationCourses: data.result.data.majorFoundationCourses,
              majorCourses: data.result.data.majorCourses,
              totalGPA: data.result.data.totalGPA,
              majorGPA: data.result.data.majorGPA,
            });
            console.log("유저 데이터 가져오기 성공:", data);
          } else {
            console.error('유저 데이터 가져오기 실패:', response.status);
          }
        } catch (error) {
          console.error('유저 데이터 가져오기 실패:', error);
        }
      };
  
      UserCreditData();
    }, []);


  

  const totalCredits = Mycredit?.totalCredits || 0;
  const culturalCourses = Mycredit?.culturalCourses || "0";
  const majorFoundationCourses = Mycredit?.majorFoundationCourses || 0;
  const majorCourses = Mycredit?.majorCourses || "0";
  const totalGPA = Mycredit?.totalGPA || "0.0";
  const majorGPA = Mycredit?.majorGPA || "0.0";

  

  return (
    <S.Layout>
      <Header catholiclogo1 catholicnamelogo />
      <S.Top>
        <Ellipse />
        <S.Mascot>
          <Mascothayangi />
        </S.Mascot>
        <S.Detail>
        <S.UserName>김가대</S.UserName>
          <HomeTypeCompo 
            types={HomeTypeCompos} 
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

//<S.UserName>{UserData?.name}</S.UserName>

// const handleCategoryClick = (category: string) => {
//   if (category === '교양') {
//     navigate('/detailclass/general');
//   } else if (category === '전공기초') {
//     navigate('/detailclass/majorbasic');
//   } else if (category === '전공') {
//     if (UserData?.major2) {
//       navigate('/detailclass/major12');
//     } else if (UserData?.minor) {
//       navigate('/detailclass/majorsecond');
//     } else {
//       navigate('/detailclass/major1');
//     }
//   }
// };