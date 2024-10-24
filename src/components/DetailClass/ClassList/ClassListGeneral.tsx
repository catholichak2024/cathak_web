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
import { CreditByIdData } from '../../../recoil/states/CreditByIdData';

const ClassListGeneral: React.FC = () => {
    const attendedClasses = useRecoilValue(attendedClassListState);
    const user = useRecoilValue(userInfoState);
    const majorAreas = useRecoilValue(MajorAreaListState);
    const CreditgeneralData = useRecoilValue(CreditByIdData);
    const classTypes = ['기초교양', '중핵교양', '자유교양'];
    const [selectedCategory, setSelectedCategory] = useState<string>(classTypes[0]);
    
    // 사용자전공을 기반으로 해당 전공의 정보를 찾기
    const majorInfo = majorAreas.flatMap(area => area.relatedMajors)
                                 .find(major => major.name === user.major);

    
    let description = ''; 
    let basicGeneralMinCredit = 0;       
    let coreGeneralMinCredit = 0;                      
     // 선택된 카테고리에 따라 description 설정
    if (majorInfo) {
        switch (selectedCategory) {
            case '기초교양':
                description = majorInfo.relatedbasicgeneral;
                basicGeneralMinCredit = CreditgeneralData.basicGeneralCredit;
                break;
            case '중핵교양':
                description = majorInfo.coregeneralText;
                coreGeneralMinCredit = CreditgeneralData.coreGeneralCredit;
                break;
            case '자유교양':
                description = '-';
                break;
            default:
                break;
        }
    }

    const filteredClasses = selectedCategory
        ? attendedClasses.filter(classItem => classItem.subCategory === selectedCategory)
        : attendedClasses; 

    const TotalminCredit = basicGeneralMinCredit + coreGeneralMinCredit;
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

export default ClassListGeneral;