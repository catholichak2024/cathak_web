import React from 'react';
import * as S from './Styles';
import Header from '../../components/Header/Header';
import { useLocation } from 'react-router-dom';
import GeneralDetailPage from './GeneralDetailPage/GeneralDetailPage';
import MajorbasicPage from './majorbasic/MajorbasicPage';
import MajorPage from './Major/MajorPage';

const DetailClassMainPage: React.FC = () => {
  const { pathname } = useLocation();
  let component;
  switch (pathname) {
    case '/detailclass/general':
      component = <GeneralDetailPage />;
      break;
    case '/detailclass/majorbasic':
      component = <MajorbasicPage />;
      break;
      case '/detailclass/major':
        component = <MajorPage />;
        break;
  }
  return (
    <S.Layout>
        <Header backarrow catholiclogo2 />
        <S.Content>{component}</S.Content>
    </S.Layout>
  );
};

export default DetailClassMainPage;