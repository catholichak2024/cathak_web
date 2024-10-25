import React from 'react';
import * as S from './Styles';
import Header from '../../components/Header/Header';
import { Mascothayangi, Ellipse, GradeManage } from '../../assets/icon';
import HomeTypeCompo from './HomeTypeCompo/HomeTypeCompo';
import { userInfoState } from '../../recoil/states/Userstate';
import { classListState } from '../../recoil/states/Classstates';
import { useRecoilValue } from 'recoil';
import Credit from './TotalCreditInfo/Credit';
import Grade from './TotalGrade/Grade';
const Home: React.FC = () => {
  const HomeTypeCompos = ['교양', '전공기초', '전공'];

  const user = useRecoilValue(userInfoState);
  const classList = useRecoilValue(classListState);

  // 각 타입에 맞는 학점을 계산
  const calculateCredits = (category: string) => {
    const attendedClasses = user.attendedClasses; // 사용자가 수강한 클래스 ID
    return classList
      .filter(classItem => attendedClasses.includes(classItem.classId) && classItem.category === category)
      .reduce((acc, classItem) => acc + classItem.credit, 0);
  };

  //총 학점수
  const credits = HomeTypeCompos.map(type => ({
    type,
    credit: calculateCredits(type),
  }));

  const totalCredits = credits.reduce((acc, { credit }) => acc + credit, 0);

  const handleCategoryClick = (category: string) => {
    // 카테고리 클릭 시의 동작 정의
    console.log(category);
  };

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
        <S.GrandGoto>
          <GradeManage />
        </S.GrandGoto>
        <Credit getCredit={0} />
        <Grade totalgrade={0} majorgrade={0} />
      </S.Bottom>
    </S.Layout>
  );
}; 

export default Home;