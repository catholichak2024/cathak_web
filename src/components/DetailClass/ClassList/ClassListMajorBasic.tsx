import React, { useState } from 'react';
import * as S from './Styles';
import ClassContainer from '../ClassContainer/ClassContainer';
import { useRecoilValue } from 'recoil';
import { attendedClassListState } from '../../../recoil/selectors/attendedClass';
import DividingLine from '../../DividingLine/DividingLine';
import EssentailBox from '../EssentailBox/EssentailBox';
import Credit from '../Credit/Credit';
import ClassType from '../ClassTypeList/ClassType/ClassType';
import { userInfoState } from '../../../recoil/states/Userstate';
import { MajorAreaListState } from '../../../recoil/states/majorstate';

const ClassListMajorBasic: React.FC = () => {
    const attendedClasses = useRecoilValue(attendedClassListState);
    const user = useRecoilValue(userInfoState);
    const majorAreas = useRecoilValue(MajorAreaListState);
    
    const classTypes = ['본영역','타계열'];
    const [selectedCategory, setSelectedCategory] = useState<string>(classTypes[0]);
    
    // 사용자전공을 기반으로 해당 전공의 영역을 찾기
    const majorAreaInfo = majorAreas.flatMap(area => area.relatedMajors)
                                 .find(major => major.name === user.major);
    const doubleMajorAreaInfo = majorAreas.flatMap(area => area.relatedMajors)
                                 .find(major => major.name === user.doubleMajor);



    const filteredClasses = attendedClasses.filter((classItem) => {
        if (classItem.category !== '전공기초') return false; // 전공 기초수업이 아닌 경우 제외

        if (selectedCategory === '본영역') {
            return classItem.majorArea === user.majorArea || classItem.majorArea === user.doubleMajorArea;  // 사용자의 1전공,2전공의 영역과 같은 경우
        } else if (selectedCategory === '타계열') {
            return classItem.majorArea !== user.majorArea && classItem.majorArea !== user.doubleMajorArea;;  
        }
    });

    // 선택된 카테고리에 따라 description 설정
    let description = '';  
    if (majorAreaInfo) {
        const subjects = selectedCategory === '본영역' 
            ? majorAreaInfo.mainAreaMajorBasicsText
            : majorAreaInfo.otherAreaMajorBasicsText;
    
        description = `[${user.major}]\n${subjects}`;
    }
    
    // 2전공 정보 추가
    if (doubleMajorAreaInfo) {
        const doubleMajorSubjects = selectedCategory === '본영역' 
            ? doubleMajorAreaInfo.mainAreaMajorBasicsText
            : doubleMajorAreaInfo.otherAreaMajorBasicsText;
    
        description += `\n\n[${user.doubleMajor}]\n${doubleMajorSubjects}`;
    }

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
                <Credit />
                <EssentailBox 
                    description={description} // 선택된 카테고리에 맞는 description
                />
                <DividingLine />
                <S.ClassBox>
                    <ClassContainer data={filteredClasses} user={user} />
                </S.ClassBox>
            </S.ClassContainer>
        </S.Layout>
    )
}

export default ClassListMajorBasic;