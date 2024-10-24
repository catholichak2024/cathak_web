import React, { useState } from 'react';
import * as S from './Styles';
import ScoreClassBox from './ScoreClassBox/ScoreClassBox';
import DividingLine from '../../DividingLine/DividingLine';

const ScoreComponent: React.FC = () => {
    
    const handleSave = () => {
        console.log('성적 저장');
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