import React from 'react';
import ClassType from './ClassType/ClassType';
import * as S from './Styles';

const ClassTypeList: React.FC = () => {
  const classTypes = ['1전공', '2전공', '타전공'];

  return (
    <S.layout>
      <ClassType types={classTypes} />
    </S.layout>
  );
};

export default ClassTypeList;
