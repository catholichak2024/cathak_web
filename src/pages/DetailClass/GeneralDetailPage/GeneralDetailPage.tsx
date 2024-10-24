import React from 'react';
import * as S from './Styles';
import ClassListGeneral from '../../../components/DetailClass/ClassList/ClassListGeneral';
import { useNavigate } from 'react-router-dom';

const GeneralDetailPage = () => {

    return (
      <S.Layout>
        <ClassListGeneral />
      </S.Layout>
    );
  };
  
  export default GeneralDetailPage;