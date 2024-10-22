import React from 'react';
import * as S from './Styles';
import ClassContainer from '../ClassContainer/ClassContainer';
import { useRecoilValue } from 'recoil';
import { attendedClassListState } from '../../../recoil/selectors/attendedClass';
import DividingLine from '../../DividingLine/DividingLine';
import EssentailBox from '../EssentailBox/EssentailBox';
import Credit from '../Credit/Credit';
import ClassTypeMajorBasicList from '../ClassTypeList/ClassTypeMajorBasicList';

const ClassListMajorBasic: React.FC = () => {
    const attendedClasses = useRecoilValue(attendedClassListState);

    return(
        <S.Layout>
            <S.ClassContainer>
                <ClassTypeMajorBasicList />
                <Credit />
                <EssentailBox 
                   description="컴퓨터와프로그램1 | 컴퓨터와프로그램2 | 프로그래밍실습1 | 프로그래밍실습2"
                />
                <DividingLine />
                <S.ClassBox>
                    <ClassContainer data={attendedClasses} />
                </S.ClassBox>
            </S.ClassContainer>
        </S.Layout>
    )
}

export default ClassListMajorBasic;