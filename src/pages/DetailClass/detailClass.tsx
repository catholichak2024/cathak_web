import React from 'react';
import * as S from './Styles';
import Header from '../../components/Header/Header';

const DetailClass: React.FC = () => {
  return (
    <S.Layout>
        <Header backarrow catholiclogo2 />
        <h1>Welcome to the DetailClass Page</h1>
    </S.Layout>
  );
};

export default DetailClass;