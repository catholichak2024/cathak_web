import React, { useEffect, useState } from 'react';
import * as S from './Styles';
import ClassContainer from '../ClassContainer/ClassContainer';
import DividingLine from '../../DividingLine/DividingLine';
import EssentailBox from '../EssentailBox/EssentailBox';
import Credit from '../Credit/Credit';
import ClassType from '../ClassTypeList/ClassType/ClassType';
import { CourseData } from '../../../recoil/types/GeneralDetailpage';
import { useRecoilValue } from 'recoil';
import { accessTokenState } from '../../../recoil/states/Loginstate';

const ClassListGeneral: React.FC = () => {
    const classTypes = ['기초교양', '중핵교양', '자유교양'];
    const [courseData, setCourseData] = useState<CourseData | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string>(classTypes[0]);
    const accessToken = useRecoilValue(accessTokenState);
    
    //교양별 엔드포인트
    const apiEndpoints: { [key: string]: string } = {
        '기초교양': 'http://13.125.38.246:3000/EveryGrade/spec/basic-cultural',
        '중핵교양': 'http://13.125.38.246:3000/EveryGrade/spec/core-cultural',
        '자유교양': 'http://13.125.38.246:3000/EveryGrade/spec/free-cultural'
      };
     
    
    useEffect(() => {
        // 교양코스 데이터 가져오기
        const fetchCourseData = async () => {
          try {
            const token = localStorage.getItem('token');
            if (!token) {
              throw new Error("토큰이 없습니다.");
            }
            const url = apiEndpoints[selectedCategory];// 선택된 카테고리에 맞는 URL 설정
            console.log("사용할 토큰:", token);
            const response = await fetch(url, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `${token}`, 
              },
            });
    
            // 상태 코드에 따른 처리
            if (response.ok) {
              const data = await response.json();
              setCourseData(data.result); 
              
            console.log("유저 데이터 가져오기 성공:", data);
        } else {
          console.error('유저 데이터 가져오기 실패:', response.status);
        }
      } catch (error) {
        console.error('유저 데이터 가져오기 실패:', error);
      }
    };
    
        fetchCourseData(); // 함수 호출
      }, [selectedCategory]);
 
    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
    };

    return(
        <S.Layout>
            <S.ClassContainer>
                <ClassType 
                    types={classTypes} 
                    selectedType={selectedCategory}
                    onTypeClick={handleCategoryClick} 
                />
                <Credit 
                    minimumCredit={courseData?.minimum ?? 0}
                    getCredit={courseData?.received ?? "0"}
                />
                <EssentailBox 
                    description={courseData?.content ?? "-"} // 선택된 카테고리에 맞는 description
                />
                <DividingLine />
                <S.ClassBox>
                    <ClassContainer data={courseData?.subject ?? []} />
                </S.ClassBox>
            </S.ClassContainer>
        </S.Layout>
    )
}

export default ClassListGeneral;