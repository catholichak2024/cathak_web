import React, { useState } from 'react';
import * as S from './Styles';
import ScoreClassBox from './ScoreClassBox/ScoreClassBox';
import DividingLine from '../../DividingLine/DividingLine';
import { useRecoilState } from 'recoil';
import { selectedGradesState } from '../../../recoil/selectors/attendedClass';

const ScoreComponent: React.FC = () => {
    const [selectedGrades, setSelectedGrades] = useRecoilState(selectedGradesState);

    const handleSave = () => {
        // 성적 저장 로직
        console.log('성적 저장', selectedGrades);
    };

    return(
        <S.Layout>
            <S.ScoreContainer>
                <S.ScoreText>성적관리</S.ScoreText>
                <ScoreClassBox />
                <S.SaveButton onClick={handleSave}>저장</S.SaveButton>
            </S.ScoreContainer>
        </S.Layout>
    )
}

export default ScoreComponent;