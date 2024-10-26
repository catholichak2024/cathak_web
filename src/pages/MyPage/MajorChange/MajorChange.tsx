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
  const [department1, setDepartment1] = useState('');  // 전공
  const [department2, setDepartment2] = useState('');  // 복수전공
  const [department3, setDepartment3] = useState('');  // 부전공
  const user = useRecoilValue(userInfoState);

  const MajorTypeCompos = ['전공심화', '복수전공', '부전공'];

  const handleSave = () => {
    const data = {
      department1,
      department2,
      department3,
    };
    console.log('저장된 데이터:', data); // 콘솔에 저장된 데이터 출력
  };

  // 전공 선택 시 컴포넌트 변경
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    // 카테고리 변경 시 상태 초기화
    if (category === '전공심화') {
      setDepartment2(''); // 복수전공 초기화
      setDepartment3(''); // 부전공 초기화
    } else if (category === '복수전공') {
      setDepartment3(''); // 부전공 초기화
    } else if (category === '부전공') {
      setDepartment1(''); // 전공심화 초기화
      setDepartment2(''); // 복수전공 초기화
    }
  };

  const handleMajorChange = (type: 'major' | 'doubleMajor' | 'minor', value: string) => {
    if (type === 'major') {
      setDepartment1(value);
    } else if (type === 'doubleMajor') {
      setDepartment2(value);
    } else if (type === 'minor') {
      setDepartment3(value);
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
          <SearchDropdown onChange={(value) => handleMajorChange('major', value)} />
        </>
      )}

      {selectedCategory === '복수전공' && (
        <>
          <S.WhatMajor>
            <Major />
          </S.WhatMajor>
          <SearchDropdown onChange={(value) => handleMajorChange('major', value)} />
          <S.WhatMajor2>
            <DoubleMajor />
          </S.WhatMajor2>
          <SearchDropdown onChange={(value) => handleMajorChange('doubleMajor', value)} />
        </>
      )}

      {selectedCategory === '부전공' && (
        <>
          <S.WhatMajor>
            <Major />
          </S.WhatMajor>
          <SearchDropdown onChange={(value) => handleMajorChange('major', value)} />

          <S.Whatminor>
            <Minor />
          </S.Whatminor>
          <SearchDropdown onChange={(value) => handleMajorChange('minor', value)} />
        </>
      )}

      <S.SaveButton onClick={handleSave}>저장하기</S.SaveButton>
    </S.Layout>
  );
};

export default MajorChange;
