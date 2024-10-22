import React from 'react';
import ClassType from './ClassType/ClassType';
import * as S from './Styles';

const ClassTypeGeneralList: React.FC = () => {
  const classTypes = ['기초교양', '중핵교양', '자유교양'];

  return (
    <S.layout>
      <ClassType types={classTypes} />
    </S.layout>
  );
};

export default ClassTypeGeneralList;
