import React from 'react';
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
import { classListState } from '../../recoil/states/Classstates'

const Home: React.FC = () => {
  const navigate = useNavigate();
  const classList = useRecoilValue(classListState);

  const generalClassCount = classList.filter((item) => item.category === '교양').length;
  const majorBasicClassCount = classList.filter((item) => item.category === '전공기초').length;
  const majorClassCount = classList.filter((item) => item.category === '전공').length;

  const totalCredits = classList.reduce((acc, item) => acc + item.credit, 0);
  const totalAverage = classList.length ? Math.round((totalCredits / classList.length) * 10) / 10 : 0;
  const majorClasses = classList.filter(item => item.category === '전공');
  const majorCredits = majorClasses.reduce((acc, item) => acc + item.credit, 0);
  const majorAverage = majorClasses.length ? Math.round((majorCredits / majorClasses.length) * 10) / 10 : 0;

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
      <S.Container>
        <S.HomeGradeManage src={homeGradeManage} alt="home grademanage" />
      </S.Container>
      <S.Middle>
        <S.HomeHapRectangle1Container>
          <S.LargeTextWithIcon>
            <div>
              <img src={homeStar} alt="home star" />  
              총 학점
            </div>

            <S.TotalGradeText>
              <S.LargeNumber>{totalCredits}</S.LargeNumber> <S.SmallNumber>/130</S.SmallNumber>
              <img src={homeMascot2} alt="home mascot2" />  
            </S.TotalGradeText>
          </S.LargeTextWithIcon>
          <S.HomeHapRectangle1 src={homeHapRectangle1} alt="home hap rectangle1" />
        </S.HomeHapRectangle1Container>

        <S.HomeHapRectangle2Container>
          <S.HomeHapRectangle2Block>
            <S.TextWithIcon>
              <img src={homeStar} alt="home star" /> 
                총 성적
            </S.TextWithIcon>
            <S.TotalGradeText>
              <S.LargeNumber2>{totalAverage}</S.LargeNumber2>  
              <S.SmallNumber2>/ 4.5</S.SmallNumber2> 
            </S.TotalGradeText>
            <S.HomeHapRectangle2 src={homeHapRectangle2} alt="home hap rectangle2" />
          </S.HomeHapRectangle2Block>

          <S.HomeHapRectangle2Block>
            <S.TextWithIcon>
              <img src={homeBadge} alt="home badge" /> 
                전공 성적
            </S.TextWithIcon>
            <S.TotalGradeText>
              <S.LargeNumber2>{majorAverage}</S.LargeNumber2>  
              <S.SmallNumber2>/ 4.5</S.SmallNumber2> 
            </S.TotalGradeText>
            <S.HomeHapRectangle2 src={homeHapRectangle2} alt="home hap rectangle2" />
          </S.HomeHapRectangle2Block>
        </S.HomeHapRectangle2Container>
      </S.Middle>
    </S.Layout>
  );
}; 

export default Home;