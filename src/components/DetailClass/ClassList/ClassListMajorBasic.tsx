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

const ClassListMajorBasic: React.FC = () => {
    const classList = useRecoilValue(classListState);
    const attendedClasses = useRecoilValue(attendedClassListState);
    const user = useRecoilValue(userInfoState);
    
    const classTypes = ['자전기','타전기'];
    const [selectedCategory, setSelectedCategory] = useState<string>(classTypes[0]);
    

    const filteredClasses = selectedCategory
        ? classList.filter(classItem => classItem.category === selectedCategory)
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
                   description="컴퓨터와프로그램1 | 컴퓨터와프로그램2 | 프로그래밍실습1 | 프로그래밍실습2"
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