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
import { useNavigate } from 'react-router-dom';

const ClassListMajorSecond: React.FC = () => {
    const classList = useRecoilValue(classListState);
    const attendedClasses = useRecoilValue(attendedClassListState);
    const user = useRecoilValue(userInfoState);
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/MyPage'); // 경로 문자열을 전달
    };
    
    const classTypes = ['제 1전공','부전공','타전공'];
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
                   description=" 외국어 강의 교과목을 중핵교양 필수, 글로벌영어영역 교과목, 전공 교과목
18학점을 수강해야함"
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