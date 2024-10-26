import React, { useState } from 'react';
import * as S from './Styles';
import Header from '../../../components/Header/Header';
import majorMulti from '../../../assets/major/major_multi.svg';
import DropDown from '../../../pages/MyPage/DropDown/DropDown';
import majorMulti2 from '../../../assets/my_image/major_multi2.svg';
import { useNavigate } from 'react-router-dom';
import { Hayangi } from '../../../assets/icon';
import { userInfoState } from '../../../recoil/states/Userstate';
import { useRecoilValue } from 'recoil';

const MajorChange: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [department1, setDepartment1] = useState('');
  const [department2, setDepartment2] = useState('');
  const navigate = useNavigate();
  const user = useRecoilValue(userInfoState);

  const activeImages = [
    majorMulti2,
    majorMulti2,
    majorMulti2,
  ];

  const options = ['학과1', '학과2', '학과3', '학과4'];

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
      <Header backarrow majorchange />
      <S.Top>
        <S.HayangiBox>
          <Hayangi />
        </S.HayangiBox>
        <S.UserName>{user.name}</S.UserName>
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

      {selectedImage !== null && (
        <>
          {/* 전공심화: 제 1전공만 */}
          {selectedImage === 0 && (
            <S.Department>
              <S.DepartmentTitle>제 1전공</S.DepartmentTitle>
              <DropDown
                options={options}
                value={department1}
                onChange={(value) => setDepartment1(value)}
              />
            </S.Department>
          )}

          {/* 복수전공: 제 1전공, 제 2전공 */}
          {selectedImage === 1 && (
            <>
              <S.Department>
                <S.DepartmentTitle>제 1전공</S.DepartmentTitle>
                <DropDown
                  options={options}
                  value={department1}
                  onChange={(value) => setDepartment1(value)}
                />
              </S.Department>
              <S.Department>
                <S.DepartmentTitle>제 2전공</S.DepartmentTitle>
                <DropDown
                  options={options}
                  value={department2}
                  onChange={(value) => setDepartment2(value)}
                />
              </S.Department>
            </>
          )}

          {/* 부전공: 제 1전공, 부전공 */}
          {selectedImage === 2 && (
            <>
              <S.Department>
                <S.DepartmentTitle>제 1전공</S.DepartmentTitle>
                <DropDown
                  options={options}
                  value={department1}
                  onChange={(value) => setDepartment1(value)}
                />
              </S.Department>
              <S.Department>
                <S.DepartmentTitle>부전공</S.DepartmentTitle>
                <DropDown
                  options={options}
                  value={department2}
                  onChange={(value) => setDepartment2(value)}
                />
              </S.Department>
            </>
          )}
        </>
      )}

      <S.SaveButton onClick={handleSave}>
        저장하기
      </S.SaveButton>
    </S.Layout>
  );
};

export default MajorChange;
