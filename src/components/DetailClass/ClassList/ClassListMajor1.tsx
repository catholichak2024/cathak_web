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

const ClassListMajor1: React.FC = () => {
    const attendedClasses = useRecoilValue(attendedClassListState);
    const user = useRecoilValue(userInfoState);
    const majorAreas = useRecoilValue(MajorAreaListState);
    
    const classTypes = ['제 1전공','타전공'];
    const [selectedCategory, setSelectedCategory] = useState<string>(classTypes[0]);
    

    // 사용자전공을 기반으로 해당 전공의 정보를 찾기
    const majorInfo = majorAreas.flatMap(area => area.relatedMajors)
                                 .find(major => major.name === user.major);

    const filteredClasses = attendedClasses.filter((classItem) => {
        if (classItem.category !== '전공') return false; // 전공 수업이 아닌 경우 제외

        if (selectedCategory === '제 1전공') {
            return classItem.major === user.major;  // 사용자의 전공과 수업의 전공이 같은 경우 '제 1전공'
        } else if (selectedCategory === '타전공') {
            return classItem.major !== user.major;  // 전공이 다른 경우 타전공
        }
        return false;
    });

    let description = '';                            
     // 선택된 카테고리에 따라 description 설정
    if (majorInfo) {
        switch (selectedCategory) {
            case '제 1전공':
                description = majorInfo.major1;
                break;
            case '타전공':
                description = majorInfo.othermajor;
                break;
            default:
                break;
        }
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

export default ClassListMajor1;