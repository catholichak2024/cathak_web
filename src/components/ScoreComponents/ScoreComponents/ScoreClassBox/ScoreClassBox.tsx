import React, { useState } from 'react';
import * as S from './Styles';
import ClassInfoTitleBox from './classInfoTitleBox/ClassInfoTitleBox';
import DividingLine from './DividingLine';
import ClassContainer from './ClassContainer/ClassContainer';
import { userInfoState } from '../../../../recoil/states/Userstate';
import { useRecoilValue } from 'recoil';
import { attendedClassListState } from '../../../../recoil/selectors/attendedClass';


const ScoreClassBox: React.FC = () => {
    const user = useRecoilValue(userInfoState);
    const attendedClasses = useRecoilValue(attendedClassListState);

    return(
        <S.Layout>
            <S.ScoreContainer>
                <ClassInfoTitleBox />
                <DividingLine />
                <S.ClassBox>
                  <ClassContainer data={attendedClasses} user={user} />
                </S.ClassBox>
            </S.ScoreContainer>
        </S.Layout>
    )
}

export default ScoreClassBox;