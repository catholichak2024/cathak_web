import React, { useEffect, useState } from 'react';
import * as S from './Styles';
import Header from '../../../components/Header/Header';
import { MajorChoice, Major, DoubleMajor, Minor, Hayangi } from '../../../assets/icon';
import WhatMajorSelectCompo from './WhatMajorSelectCompo/WhatMajorSelectCompo';
import SearchDropdown from './SearchDropdown';
import { useRecoilState, useRecoilValue } from 'recoil';
import { MajorChangeState } from '../../../recoil/states/MajorChangestates';
import { MajorChangeRequest } from '../../../recoil/types/majorChangeTypes';
import { userState } from '../../../recoil/states/UserFindstate'

const MajorChange: React.FC = () => {
  const [majorChange, setMajorChange] = useRecoilState<MajorChangeRequest>(MajorChangeState);
  const user = useRecoilValue(userState);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const MajorTypeCompos = ['전공심화', '복수전공', '부전공'];

  const handleSave = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error("토큰이 없습니다.");
      }
      
      const response = await fetch('https://www.everygrade.store/EveryGrade/mypage/major', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${token}`,
        },
        body: JSON.stringify(majorChange),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('저장된 데이터:', data);
        // majorChange 상태 업데이트
        setMajorChange(data.majorData);
      } else {
        console.error(`요청 실패: 상태 코드 ${response.status}`);
      }
    } catch (error) {
      console.error('데이터 저장 실패:', error);
    }
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    // 카테고리 변경 시 상태 초기화
    setMajorChange((prev) => ({
      ...prev,
      major_type: category,
      major1: '',
      major2: '',
      minor: '',
    }));
  };

  const handleMajorChange = (type: 'major' | 'doubleMajor' | 'minor', value: string) => {
    setMajorChange((prev) => ({
      ...prev,
      [type === 'major' ? 'major1' : type === 'doubleMajor' ? 'major2' : 'minor']: value,
    }));
  };

  return (
    <S.Layout>
      <Header backarrow majorchange />
      <S.Top>
        <S.HayangiBox>
          <Hayangi />
        </S.HayangiBox>
        <S.UserName>{user?.name ?? '이름 없음'}</S.UserName>
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
