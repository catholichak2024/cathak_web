import React, { useState } from 'react';
import * as S from './Styles';
import ClassContainer from '../ClassContainer/ClassContainer';
import { useRecoilValue } from 'recoil';
import { attendedClassListState } from '../../../recoil/selectors/attendedClass';
import DividingLine from '../../DividingLine/DividingLine';
import EssentailBox from '../EssentailBox/EssentailBox';
import Credit from '../Credit/Credit';
import { classListState } from '../../../recoil/states/Classstates';
import ClassType from '../ClassTypeList/ClassType/ClassType';
import { userInfoState } from '../../../recoil/states/Userstate';

const ClassListGeneral: React.FC = () => {
    const classList = useRecoilValue(classListState);
    const attendedClasses = useRecoilValue(attendedClassListState);
    const user = useRecoilValue(userInfoState);
    
    const classTypes = ['기초교양', '중핵교양', '자유교양'];
    const [selectedCategory, setSelectedCategory] = useState<string>(classTypes[0]);
    

    const filteredClasses = selectedCategory
        ? classList.filter(classItem => classItem.subCategory === selectedCategory)
        : classList; 

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
                   description=" I-DESIGN, Career-DESIGN “인문/사회, 자연/과학, 휴먼/테크, 글로벌/영어” 각 분야별 3학점"
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