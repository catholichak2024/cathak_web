import React from 'react';
import ClassType from './ClassType/ClassType';
import * as S from './Styles';

const ClassTypeMajorBasicList: React.FC = () => {
  const classTypes = ['자전기','타전기'];

  return (
    <S.layout>
      <ClassType types={classTypes} />
    </S.layout>
  );
};

export default ClassTypeMajorBasicList;

