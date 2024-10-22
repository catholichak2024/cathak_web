import React from 'react';
import * as S from './Styles';

type ClassTypeProps = {
  types: string[];
};

const ClassType: React.FC<ClassTypeProps> = ({ types }) => {
  return (
    <S.layout>
      {types.map((type, index) => (
        <S.textWithLine key={index}>
          {type}
          <S.line />
        </S.textWithLine>
      ))}
    </S.layout>
  );
};

export default ClassType;
