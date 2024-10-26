import React, { useEffect, useState } from 'react';
import * as S from './Styles';
import Header from '../../../components/Header/Header';
import { userInfoState } from '../../../recoil/states/Userstate';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { MajorChoice, Major, DoubleMajor, Minor, Hayangi } from '../../../assets/icon';
import WhatMajorSelectCompo from './WhatMajorSelectCompo/WhatMajorSelectCompo';
import SearchDropdown from './SearchDropdown';

const MajorChange: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null); 
  const [department1, setDepartment1] = useState('');
  const [department2, setDepartment2] = useState('');
  const user = useRecoilValue(userInfoState);
  const setUser = useSetRecoilState(userInfoState);

  const MajorTypeCompos = ['전공심화', '복수전공', '부전공'];

  const handleImageClick = (index: number): void => {
    setSelectedImage(index);
  };

  const handleSave = () => {
    const data = {
      department1,
      department2,
      selectedImage,
      selectedCategory, // 선택된 카테고리도 포함
    };
    console.log('저장된 데이터:', data); // 콘솔에 저장된 데이터 출력
  };

  // 전공 선택 시 컴포넌트 변경
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category); 
  };

  const handleMajorChange = (type: 'major' | 'doubleMajor' | 'minor', value: string) => {
    if (type === 'major') {
      setDepartment1(value);
    } else if (type === 'doubleMajor') {
      setDepartment2(value);
    }
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
        <MajorChoice />
      </S.MajorSelect>

      <WhatMajorSelectCompo
        types={MajorTypeCompos} 
        onTypeClick={handleCategoryClick} 
        selectedCategory={selectedCategory}
      />

      {/* 선택된 카테고리에 따른 조건부 렌더링 */}
      {selectedCategory === '전공심화' && (
        <>
          <S.WhatMajor>
            <Major />
          </S.WhatMajor>
          <SearchDropdown onChange={(value) => handleMajorChange('major', value)}/>
        </>
      )}

      {selectedCategory === '복수전공' && (
        <>
          <S.WhatMajor>
            <Major />
          </S.WhatMajor>
          <SearchDropdown onChange={(value) => handleMajorChange('major', value)}/>
          {/* 두 번째 드롭다운 */}
          <S.WhatMajor>
            <DoubleMajor />
          </S.WhatMajor>
          <SearchDropdown onChange={(value) => handleMajorChange('doubleMajor', value)}/>
        </>
      )}

      {selectedCategory === '부전공' && (
        <>
          <S.WhatMajor>
            <Major />
          </S.WhatMajor>
          <SearchDropdown onChange={(value) => handleMajorChange('major', value)}/>

          <S.Whatminor>
            <Minor />
          </S.Whatminor>
          <SearchDropdown onChange={(value) => handleMajorChange('minor', value)}/>
        </>
      )}

      <S.SaveButton onClick={handleSave}>저장하기</S.SaveButton>
    </S.Layout>
  );
};

export default MajorChange;
