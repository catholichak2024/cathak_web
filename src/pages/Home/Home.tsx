import React, { useState } from 'react';
import * as S from './Styles';
import Header from '../../components/Header/Header';
import { Mascothayangi, Ellipse, GradeManage } from '../../assets/icon';
import HomeTypeCompo from './HomeTypeCompo/HomeTypeCompo';
import { userInfoState } from '../../recoil/states/Userstate';
import { classListState } from '../../recoil/states/Classstates';
import { useRecoilValue } from 'recoil';
import Credit from './TotalCreditInfo/Credit';
import Grade from './TotalGrade/Grade';
import { selectedGradesState } from '../../recoil/selectors/attendedClass';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const HomeTypeCompos = ['교양', '전공기초', '전공'];

  const user = useRecoilValue(userInfoState);
  const classList = useRecoilValue(classListState);
  const selectedGrades = useRecoilValue(selectedGradesState);
  const navigate = useNavigate();

  // 각 타입에 맞는 학점/성적을 계산
  const calculateCredits = (category?: string) => {
    const attendedClasses = user.attendedClasses; // 사용자가 수강한 클래스 ID
    return classList
      .filter(classItem => attendedClasses.includes(classItem.classId) && (!category || classItem.category === category))
      .reduce((acc, classItem) => acc + classItem.credit, 0);
  };

  //총성적계산
  const calculateTotalGrade = () => {
    const totalScore = classList.reduce((acc, classItem) => {
        const grade = selectedGrades[classItem.classId];
        return grade !== null && grade !== undefined
            ? acc + (grade)
            : acc;
    }, 0);

    // 사용자가 입력한 성적의 개수로 나누기
    const totalGradesCount = Object.values(selectedGrades).filter(grade => grade !== null).length;
    return totalGradesCount ? (totalScore / totalGradesCount).toFixed(1) : "0.0";
};

const calculateMajorGrade = () => {
  const totalScore = classList.reduce((acc, classItem) => {
      if (classItem.category === '전공') {
          const grade = selectedGrades[classItem.classId];
          return grade !== null && grade !== undefined
              ? acc + grade
              : acc;
      }
      return acc;
  }, 0);

  // 전공 수업의 개수 세기
  const totalMajorGradesCount = classList.filter(classItem => classItem.category === '전공' &&
                                                              selectedGrades[classItem.classId] !== null && 
                                                              selectedGrades[classItem.classId] !== undefined).length;

  console.log('Total Major Score:', totalScore); // 추가된 로그
  console.log('Total Major Grades Count:', totalMajorGradesCount); // 추가된 로그

  return totalMajorGradesCount ? (totalScore / totalMajorGradesCount).toFixed(1) : "0.0";
  
};

  //총 학점수
  const credits = HomeTypeCompos.map(type => ({
    type,
    credit: calculateCredits(type),
  }));

  // 전체 수업 학점/성적/전공성적 계산
  const totalCredits = calculateCredits();
  const totalGrade = calculateTotalGrade(); 
  const majorGrade = calculateMajorGrade()

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
  };
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
                    credit={credits}
                    onTypeClick={handleCategoryClick} 
              />
          </S.Detail>
      </S.Top>
      <S.Bottom>
        <S.GrandGoto onClick={() => navigate('/scoreInfo')}>
          <GradeManage />
        </S.GrandGoto>
        <Credit getCredit={totalCredits} />
        <Grade totalgrade={totalGrade} majorgrade={majorGrade} />
      </S.Bottom>
    </S.Layout>
  );
}; 

export default Home;
