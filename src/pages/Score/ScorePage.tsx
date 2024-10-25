import React from 'react';
import * as S from './Styles';
import Header from '../../components/Header/Header';
import ScoreComponent from '../../components/ScoreComponents/ScoreComponents/ScoreComponent';
const ScorePage: React.FC = () => {
  
  return (
    <S.Layout>
        <Header backarrow catholiclogo2 />
        <ScoreComponent />
    </S.Layout>
  );
};

export default ScorePage;