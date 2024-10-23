import React, { useState } from 'react';
import * as S from './StylesCh';
import Header from '../../components/Header/Header';
import myBigRectangle from '../../assets/my_image/my_big_rectangle.svg';
import myHayangi from '../../assets/my_image/my_hayangi.svg';
import myLogout from '../../assets/my_image/my_logout.svg';
import myPassword from '../../assets/my_image/my_password.svg';
import myRectangle from '../../assets/my_image/my_rectangle.svg';
import myMajorChange from '../../assets/my_image/my_major_change.svg';
import majorOne from '../../assets/my_image/major_one.svg';
import majorTwo from '../../assets/my_image/major_two.svg';
import majorDeep from '../../assets/major/major_deep.svg';
import majorMulti from '../../assets/major/major_multi.svg';
import majorSub from '../../assets/major/major_sub.svg';

const MyPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handleImageClick = (index: number) => {
    setSelectedImage(index);
  };

  return (
    <S.Layout>

      <div style={{ position: 'absolute', top: 0, width: '100%', zIndex: 1000, display: 'flex', justifyContent: 'space-between'}}>
        <Header backarrow={true} />
        <img src={myLogout} alt="my logout" style={{width: '43px', height: '13px', position: 'absolute', top: '40px', right: '30px'}} />
      </div>

      <S.Top>
        <S.MyBigRectangle>
          <S.MainImage src={myBigRectangle} alt="my big rectangle" />
          <S.MyHayangi src={myHayangi} alt="my hayangi" />
          <S.NameText>이름</S.NameText>
        </S.MyBigRectangle>
      </S.Top>

      <S.MajorSelect>
        <S.SelectText>전공 선택</S.SelectText>
      </S.MajorSelect>

      <S.ImageContainer>
        <S.ImageButton isActive={selectedImage === 0} onClick={() => handleImageClick(0)}>
          <img src={majorDeep} alt="이미지 1" />
        </S.ImageButton>

        <S.ImageButton isActive={selectedImage === 1} onClick={() => handleImageClick(1)}>
          <img src={majorSub} alt="이미지 2" />
        </S.ImageButton>

        <S.ImageButton isActive={selectedImage === 2} onClick={() => handleImageClick(2)}>
          <img src={majorMulti} alt="이미지 3" />
        </S.ImageButton>
      </S.ImageContainer>

      {/* <S.Department>

      </S.Department> */}
      
    </S.Layout>
  )
}


export default MyPage;