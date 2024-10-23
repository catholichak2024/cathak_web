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
const ClassListMajorSecond: React.FC = () => {
    const attendedClasses = useRecoilValue(attendedClassListState);
    const user = useRecoilValue(userInfoState);
    const majorAreas = useRecoilValue(MajorAreaListState);
    
    const classTypes = ['제 1전공','부전공','타전공'];
    const [selectedCategory, setSelectedCategory] = useState<string>(classTypes[0]);
    
    // 사용자전공을 기반으로 해당 전공의 정보를 찾기
    const majorInfo = majorAreas.flatMap(area => area.relatedMajors)
                                 .find(major => major.name === user.major);
    const minorInfo = majorAreas.flatMap(area => area.relatedMajors)
                                 .find(major => major.name === user.minor);


    const filteredClasses = attendedClasses.filter((classItem) => {
        if (classItem.category !== '전공') return false; // 전공 수업이 아닌 경우 제외

        if (selectedCategory === '제 1전공') {
            return classItem.major === user.major;  // 사용자의 1전공과 같은 경우
        } else if (selectedCategory === '부전공') {
            return classItem.major === user.minor;  // 사용자의 2전공과 같은 경우
        } else if (selectedCategory === '타전공') {
            return classItem.major !== user.major && classItem.major !== user.minor;  // 1전공과 2전공이 모두 아닌 경우
        }
    });
    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
    };

    let description = '';                            
     // 선택된 카테고리에 따라 description 설정
     switch (selectedCategory) {
        case '제 1전공':
            description = majorInfo?.major1 || ''; // 1전공의 description
            break;
        case '부전공':
            description = minorInfo?.minor || ''; // 2전공의 description
            break;
        case '타전공':
            description = majorInfo?.othermajor || ''; // 타전공의 description
            break;
        default:
            break;
    }

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

export default ClassListMajorSecond;