import React, { useEffect, useState } from 'react';
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
    const minorAreaInfo = majorAreas.flatMap(area => area.relatedMajors)
                                 .find(major => major.name === user.minor);

    //전공기초수업정렬
    const filteredClasses = attendedClasses.filter((classItem) => {
        if (classItem.category !== '전공기초') return false; // 전공 기초수업이 아닌 경우 제외

        if (selectedCategory === '본영역') {
            return classItem.majorArea === user.majorArea || classItem.majorArea === user.doubleMajorArea || classItem.majorArea === user.minor;  // 사용자의 1전공,2전공의 영역과 같은 경우
        } else if (selectedCategory === '타계열') {
            return classItem.majorArea !== user.majorArea && classItem.majorArea !== user.doubleMajorArea && classItem.majorArea !== user.minor;;  
        }
    });

    let description = '';  
    let major1MinCredit = 0;

    //1전공(설명, 최소이수학점)
    if (majorAreaInfo) {
        const majorInfo = selectedCategory === '본영역' 
            ? majorAreaInfo.mainAreaMajorBasicsText 
            : majorAreaInfo.otherAreaMajorBasicsText;

        //설명
        description = `[${user.major}]\n${majorInfo}`;

        //최소이수학점
        major1MinCredit = selectedCategory === '본영역' 
            ? majorAreaInfo.MajorBasicMinCredit[0]  // 본영역 최소이수 학점
            : majorAreaInfo.MajorBasicMinCredit[1]; // 타계열 최소이수 학점
    }
    
    // 2전공(설명, 최소이수학점)
    let major2MinCredit = 0;
    if (doubleMajorAreaInfo) {
        const doubleMajorSubjects = selectedCategory === '본영역' 
            ? doubleMajorAreaInfo.mainAreaMajorBasicsText
            : doubleMajorAreaInfo.otherAreaMajorBasicsText;
    
        description += `\n\n[${user.doubleMajor}]\n${doubleMajorSubjects}`;
        
        major2MinCredit = selectedCategory === '본영역' 
            ? doubleMajorAreaInfo.MajorBasicMinCredit[0]  // 본영역 최소이수 학점
            : doubleMajorAreaInfo.MajorBasicMinCredit[1]; // 타계열 최소이수 학점
   
        
    }

    // 부전공(설명, 최소이수학점)
    let minorMinCredit = 0;
    if (minorAreaInfo) {
        const minorSubjects = selectedCategory === '본영역' 
            ? minorAreaInfo.mainAreaMajorBasicsText
            : minorAreaInfo.otherAreaMajorBasicsText;

        description += `\n\n[${user.minor}]\n${minorSubjects}`;

        minorMinCredit = selectedCategory === '본영역' 
            ? minorAreaInfo.MajorBasicMinCredit[0]  // 본영역 최소이수 학점
            : minorAreaInfo.MajorBasicMinCredit[1]; // 타계열 최소이수 학점
    
    }

    //최소이수학점/ 취득학점계산
    const TotalminCredit = major1MinCredit + major2MinCredit + minorMinCredit;
    const getTotalCredit = filteredClasses.reduce((acc, classItem) => acc + classItem.credit, 0);

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
                    minimumCredit={TotalminCredit}
                    getCredit={getTotalCredit}
                />
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