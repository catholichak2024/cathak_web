import React from 'react';
import * as S from './Styles';
import ClassContainer from '../ClassContainer/ClassContainer';
import { useRecoilValue } from 'recoil';
import { attendedClassListState } from '../../../recoil/selectors/attendedClass';
import DividingLine from '../../DividingLine/DividingLine';
import EssentailBox from '../EssentailBox/EssentailBox';
import Credit from '../Credit/Credit';
import ClassTypeList from '../ClassTypeList/ClassTypeList';

const ClassList: React.FC = () => {
    const attendedClasses = useRecoilValue(attendedClassListState);

    return(
        <S.Layout>
            <S.ClassContainer>
                <ClassTypeList />
                <Credit />
                <EssentailBox 
                   description="I-DESIGN, Career-DESIGN 인문/사회, 자연/과학, 휴먼/테크, 글로벌/영어 각 분야별 3학점"
                />
                <DividingLine />
               <ClassContainer data={attendedClasses} />
            </S.ClassContainer>
        </S.Layout>
    )
}

export default ClassList;