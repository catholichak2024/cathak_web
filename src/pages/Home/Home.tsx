import React, { useState } from 'react';
import * as S from './Styles';
import Header from '../../components/Header/Header';
import homeRectangle from '../../assets/home_image/home_rectangle.svg';
import homeEllipse from '../../assets/home_image/home_ellipse.svg';
import homeMascot from '../../assets/home_image/home_mascot_hayangi.svg';
import homeRectangleDetail from '../../assets/home_image/home_rectangle_detail.svg';
import homeGradeManage from '../../assets/home_image/home_grademanage.svg';
import homeHapRectangle1 from '../../assets/home_image/home_hap_rectangle1.svg';
import homeHapRectangle2 from '../../assets/home_image/home_hap_rectangle2.svg';
import homeStar from '../../assets/home_image/home_star.svg';
import homeBadge from '../../assets/home_image/home_badge.svg';
import homeMascot2 from '../../assets/home_image/home_mascot_2.svg';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import Credit from './TotalCreditInfo/Credit';
import Grade from './TotalGrade/Grade';
import { selectedGradesState } from '../../recoil/selectors/attendedClass';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const classList = useRecoilValue(classListState);
  const selectedGrades = useRecoilValue(selectedGradesState);
  const navigate = useNavigate();

  // 각 타입에 맞는 학점/성적을 계산
  const calculateCredits = (category?: string) => {
    const attendedClasses = user.attendedClasses; 
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
      <div style={{ position: 'absolute', top: 0, width: '100%', zIndex: 1000 }}>
        <Header catholiclogo1={true} catholicnamelogo={true} />
      </div>
      <S.Top>
        <div style={{ position: 'relative', width: '100%', height: 'auto' }}>
          <S.HomeRectangleImage src={homeRectangle} alt="home rectangle" />
          <S.HomeEllipseImage src={homeEllipse} alt="home ellipse" />
          <S.HomeMascotImage src={homeMascot} alt="home mascot" />
          <div>
            <S.Detail>
              <img src={homeRectangleDetail} alt="home rectangle detail" />
              <S.TextOverlay>
                <div onClick={() => navigate("/detailclass/general")}>
                  <span>교양</span>
                  <span>{generalClassCount}</span>
                </div>
                <S.Line />
                <div onClick={() => navigate("/detailclass/majorbasic")}>
                  <span>전공기초</span>
                  <span>{majorBasicClassCount}</span>
                </div>
                <S.Line />
                <div onClick={() => navigate("/detailclass/major1")}>
                  <span>전공</span>
                  <span>{majorClassCount}</span>
                </div>
              </S.TextOverlay>
            </S.Detail>
          </div>
        </div>
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
