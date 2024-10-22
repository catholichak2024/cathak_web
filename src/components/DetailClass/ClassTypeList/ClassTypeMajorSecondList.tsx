import React from 'react';
import ClassType from './ClassType/ClassType';
import * as S from './Styles';

const ClassTypeMajorSecondList: React.FC = () => {
  const classTypes = ['제 1전공','타전공'];

  return (
    <S.layout>
      <ClassType types={classTypes} />
    </S.layout>
  );
};

export default ClassTypeMajorSecondList;

