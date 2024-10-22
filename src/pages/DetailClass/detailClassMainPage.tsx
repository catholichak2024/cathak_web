import React from 'react';
import * as S from './Styles';
import Header from '../../components/Header/Header';
import { useLocation } from 'react-router-dom';
import GeneralDetailPage from './GeneralDetailPage/GeneralDetailPage';

const DetailClass: React.FC = () => {
  const { pathname } = useLocation();
  let component;
  switch (pathname) {
    case '/detailclass/general':
      component = <GeneralDetailPage />;
      break;
    
  }
  return (
    <S.Layout>
        <Header backarrow catholiclogo2 />
        <S.Content>{component}</S.Content>
    </S.Layout>
  );
};

export default DetailClass;