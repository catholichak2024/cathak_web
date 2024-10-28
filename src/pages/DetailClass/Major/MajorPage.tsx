import React, { useEffect, useState } from 'react';
import * as S from './Styles';
import ClassListMajor1 from '../../../components/DetailClass/ClassList/ClassListMajor1';
import ClassListMajor12 from '../../../components/DetailClass/ClassList/ClassListMajor12';
import MajorSecondPage from '../../../components/DetailClass/ClassList/ClassListMajorSecond';

const MajorPage: React.FC = () => {
  const [majorType, setMajorType] = useState<string | null>(null);

  useEffect(() => {
    const fetchMajorType = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('토큰이 없습니다.');
        }

        const response = await fetch('http://13.125.38.246:3000/EveryGrade/spec/major-type' , {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `${token}`
          }
        });

        if (response.ok) {
          const data = await response.json();
          setMajorType(data.result.major_type); // 예: "전공심화", "복수전공", "부전공"
        } else {
          console.error('전공 타입 데이터 가져오기 실패:', response.status);
        }
      } catch (error) {
        console.error('전공 타입 데이터 가져오기 실패:', error);
      }
    };

    fetchMajorType();
  }, []);

  const renderClassList = () => {
    switch (majorType) {
      case '전공심화':
        return <ClassListMajor1 />;
      case '복수전공':
        return <ClassListMajor12 />;
      case '부전공':
        return <MajorSecondPage />;
      default:
        return <p>전공 정보를 불러오는 중입니다...</p>;
    }
  };

  return (
    <S.Layout>
      {renderClassList()}
    </S.Layout>
  );
};

export default MajorPage;