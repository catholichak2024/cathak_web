import React, { useEffect, useState } from 'react';
import * as S from './Styles';
import ClassContainer from '../ClassContainer/ClassContainer';
import DividingLine from '../../DividingLine/DividingLine';
import EssentailBox from '../EssentailBox/EssentailBox';
import Credit from '../Credit/Credit';
import ClassType from '../ClassTypeList/ClassType/ClassType';
import { MajorBasicCourseData, MajorBasicContent } from '../../../recoil/types/MajorBasicCourseData';
import { useRecoilValue } from 'recoil';
import { accessTokenState } from '../../../recoil/states/Loginstate';

const ClassListMajorBasic: React.FC = () => {
    const classTypes = ['본영역', '타계열'];
    const [courseData, setCourseData] = useState<MajorBasicCourseData | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string>(classTypes[0]);
    const accessToken = useRecoilValue(accessTokenState);
    
    // API 엔드포인트 설정
    const apiEndpoints: { [key: string]: string } = {
        '본영역': 'https://www.everygrade.store/EveryGrade/spec/my-major',
        '타계열': 'https://www.everygrade.store/EveryGrade/spec/other-major'
    };

    useEffect(() => {
        // 전공기초 데이터 가져오기
        const fetchCourseData = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    throw new Error("토큰이 없습니다.");
                }

                const url = apiEndpoints[selectedCategory]; // 선택된 카테고리에 맞는 URL 설정
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
                    console.log("전공기초 데이터 가져오기 성공:", data);
                } else {
                    console.error('전공기초 데이터 가져오기 실패:', response.status);
                }
            } catch (error) {
                console.error('전공기초 데이터 가져오기 실패:', error);
            }
        };

        fetchCourseData(); // 함수 호출
    }, [selectedCategory]);

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
    };

    const description = courseData?.content
    .map((item: MajorBasicContent, index: number) => {
        const divider = index === 1 ? '-------------------------------------------------------------------\n' : '';
        return `${divider}[${item.major}]
        
${item.content}
`;
    })
    .join('\n') ?? "-";

    return (
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
                    description={description}
                />
                <DividingLine />
                <S.ClassBox>
                    <ClassContainer data={courseData?.subject ?? []} />
                </S.ClassBox>
            </S.ClassContainer>
        </S.Layout>
    );
}

export default ClassListMajorBasic;
