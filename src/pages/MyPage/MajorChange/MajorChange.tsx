import React, { useState } from 'react';
import * as S from './Styles';
import Header from '../../../components/Header/Header';
import myBigRectangle from '../../../assets/my_image/my_big_rectangle.svg';
import myHayangi from '../../..//assets/my_image/my_hayangi.svg';
import majorMulti from '../../../assets/major/major_multi.svg';
import majorMulti2 from '../../../assets/my_image/major_multi2.svg';
import { useNavigate } from 'react-router-dom';


const MajorChange: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [department1, setDepartment1] = useState('');
  const [department2, setDepartment2] = useState('');
  const navigate = useNavigate();


  const activeImages = [
    majorMulti2,  
    majorMulti2,  
    majorMulti2,  
  ];

  const handleImageClick = (index: number): void => {
    setSelectedImage(index);
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
        {[0, 1, 2].map((index) => (
          <S.ImageButton
            key={index}
            isActive={selectedImage === index} 
            onClick={() => handleImageClick(index)} 
          >
            <img
              src={selectedImage === index ? activeImages[index] : majorMulti}
              alt={`이미지 ${index + 1}`}
            />
            <span>
              {index === 0 ? '전공심화' : index === 1 ? '복수전공' : '부전공'}
            </span>
          </S.ImageButton>
        ))}
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
