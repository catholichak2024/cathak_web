import React, { useEffect } from 'react';
import * as S from './Styles';
import Header from '../../components/Header/Header';
import { Mascothayangi, Ellipse, GradeManage } from '../../assets/icon';
import HomeTypeCompo from './HomeTypeCompo/HomeTypeCompo';
import { userInfoState } from '../../recoil/states/Userstate';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import Credit from './TotalCreditInfo/Credit';
import Grade from './TotalGrade/Grade';
import { useNavigate } from 'react-router-dom';
import { fetchTotalGradeCredit } from '../../apis/HomeTotalGrade'; // 성적 조회 API
import { courseState } from '../../recoil/states/HomeStatae';
import { TotalGradeCredit } from '../../recoil/types/Home'; // CourseData 인터페이스의 경로에 맞게 수정하세요.

const Home: React.FC = () => {
  const HomeTypeCompos = ['교양', '전공기초', '전공'];
  const navigate = useNavigate();
  const user = useRecoilValue(userInfoState);
  const setCourseData = useSetRecoilState(courseState); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const gradeResponse: TotalGradeCredit = await fetchTotalGradeCredit(); // 성적 데이터 가져오기
        setCourseData(gradeResponse); // Recoil 상태에 저장
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [setCourseData]);

  // Recoil 상태에서 학점/성적 가져오기
  const courseData = useRecoilValue(courseState); // Recoil 상태 가져오기
  const totalCredits = courseData?.data.totalCredits || 0; // 총 학점
  const culturalCourses = courseData?.data.culturalCourses || 0; // 교양 과목 수
  const majorFoundationCourses = courseData?.data.majorFoundationCourses || 0; // 전공 기초 과목 수
  const majorCourses = courseData?.data.majorCourses || 0; // 전공 과목 수
  const totalGPA = courseData?.data.totalGPA || 0; // 총 GPA
  const majorGPA = courseData?.data.majorGPA || 0; // 전공 GPA

  const handleCategoryClick = (category: string) => {
    // 카테고리 클릭 시 해당 경로로 이동
    if (category === '교양') {
      navigate('/detailclass/general');
    } else if (category === '전공기초') {
      navigate('/detailclass/majorbasic');
    } else if (category === '전공') {
      if (user.doubleMajor) {
        navigate('/detailclass/major12'); // 복수전공이 있는 경우
      } else if (user.minor) {
        navigate('/detailclass/majorsecond'); // 부전공이 있는 경우
      } else if (user.major) {
        navigate('/detailclass/major1'); // 전공심화
      }
    }
  }

  return (
    <S.Layout>
      <Header catholiclogo1 catholicnamelogo />
      <S.Top>
        <Ellipse />
        <S.Mascot>
          <Mascothayangi />
        </S.Mascot>
        <S.Detail>
          <S.UserName>{user.name}</S.UserName>
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
