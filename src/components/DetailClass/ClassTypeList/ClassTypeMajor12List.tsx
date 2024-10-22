import React from 'react';
import ClassType from './ClassType/ClassType';
import * as S from './Styles';

const ClassTypeMajor12List: React.FC = () => {
  const classTypes = ['제 1전공','제 2전공','타전공'];


  return (
    <S.layout>
      <ClassType types={classTypes} />
    </S.layout>
  );
};

export default ClassTypeMajor12List;

