import React from 'react';
import * as S from './Styles';
import Header from '../../components/Header/Header';
import { useLocation } from 'react-router-dom';
import GeneralDetailPage from './GeneralDetailPage/GeneralDetailPage';
import MajorbasicPage from './majorbasic/MajorbasicPage';
import Major1Page from './Major1/Major1Page';
import Major12Page from './Major12/Major12Page';
import MajorSecondPage from './MajorSecond/MajorSecondPage';

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
    case '/detailclass/major1':
      component = <Major1Page />;
      break;
    case '/detailclass/major12':
      component = <Major12Page />;
      break;
    case '/detailclass/majorsecond':
      component = <MajorSecondPage />; 
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