import React, { useState } from 'react';
import * as S from './Styles';

type ClassTypeProps = {
  types: string[];
};

const ClassType: React.FC<ClassTypeProps> = ({ types }) => {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const handleClick = (type: string) => {
    setSelectedType(type);
  };

  return (
    <S.layout>
      {types.map((type, index) => (
        <S.textWithLine key={index} onClick={() => handleClick(type)}>
          <S.textContainer> 
            {selectedType === type && <S.redDot />} 
            <S.underlinedText>{type}</S.underlinedText>
          </S.textContainer>
          <S.line isSelected={selectedType === type} />
        </S.textWithLine>
      ))}
    </S.layout>
  );
};

export default ClassType;