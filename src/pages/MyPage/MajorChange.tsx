import React, { useState } from 'react';
import * as S from './StylesCh';
import Header from '../../components/Header/Header';
import myBigRectangle from '../../assets/my_image/my_big_rectangle.svg';
import myHayangi from '../../assets/my_image/my_hayangi.svg';
import majorMulti from '../../assets/major/major_multi.svg';
import { useNavigate } from 'react-router-dom';


const MajorChange: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [department1, setDepartment1] = useState('');
  const [department2, setDepartment2] = useState('');
  const navigate = useNavigate();

  const handleImageClick = (index: number): void => {
    if (index !== selectedImage) {
      setSelectedImage(index);
    }
  };

  const handleSave = () => {
    const data = {
      department1,
      department2,
      selectedImage,
    };
    console.log('저장된 데이터:', data);
  };

  return (
    <S.Layout>
      <S.Container>
        <Header backarrow={true}/>
        <S.TitleText>
          전공변경
        </S.TitleText>
      </S.Container>

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
          <img src={majorMulti} alt="이미지 1" />
          <span>전공심화</span>
        </S.ImageButton>

        <S.ImageButton isActive={selectedImage === 1} onClick={() => handleImageClick(1)}>
          <img src={majorMulti} alt="이미지 2" />
          <span>복수전공</span>
        </S.ImageButton>

        <S.ImageButton isActive={selectedImage === 2} onClick={() => handleImageClick(2)}>
          <img src={majorMulti} alt="이미지 3" />
          <span>부전공</span>
        </S.ImageButton>
      </S.ImageContainer>

      {selectedImage === 0 && (
        <S.Department>
          <S.DepartmentTitle>제 1전공</S.DepartmentTitle>
          <S.DepartmentInput
            id="department1"
            type="text"
            placeholder="학과"
            value={department1}
            onChange={(e) => setDepartment1(e.target.value)}
          />
        </S.Department>
      )}

      {selectedImage === 1 && (
        <>
          <S.Department>
            <S.DepartmentTitle>제 1전공</S.DepartmentTitle>
            <S.DepartmentInput
              id="department1"
              type="text"
              placeholder="학과"
              value={department1}
              onChange={(e) => setDepartment1(e.target.value)}
            />
          </S.Department>

          <S.Department>
            <S.DepartmentTitle>제 2전공</S.DepartmentTitle>
            <S.DepartmentInput
              id="department2"
              type="text"
              placeholder="학과"
              value={department2}
              onChange={(e) => setDepartment2(e.target.value)}
            />
          </S.Department>
        </>
      )}

      {selectedImage === 2 && (
        <>
          <S.Department>
            <S.DepartmentTitle>제 1전공</S.DepartmentTitle>
            <S.DepartmentInput
              id="department1"
              type="text"
              placeholder="학과"
              value={department1}
              onChange={(e) => setDepartment1(e.target.value)}
            />
          </S.Department>

          <S.Department>
            <S.DepartmentTitle>제 2전공</S.DepartmentTitle>
            <S.DepartmentInput
              id="department2"
              type="text"
              placeholder="학과"
              value={department2}
              onChange={(e) => setDepartment2(e.target.value)}
            />
          </S.Department>
        </>
      )}

      <S.SaveButton onClick={handleSave}>
        저장하기
      </S.SaveButton>

    </S.Layout>
  );
};

export default MajorChange;
