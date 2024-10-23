import React from 'react';
import * as S from './Styles';

type ClassTypeProps = {
    types: string[];
    selectedType: string | null; 
    onTypeClick: (type: string) => void;
};

const ClassType: React.FC<ClassTypeProps> = ({ types, selectedType, onTypeClick }) => {
    return (
        <S.layout>
            {types.map((type, index) => (
                <S.textWithLine key={index} onClick={() => onTypeClick(type)}>
                    <S.redDot isSelected={selectedType === type} /> 
                    <S.underlinedText>{type}</S.underlinedText>
                    <S.line style={{ backgroundColor: selectedType === type ? 'rgba(26, 38, 79, 1)' : '#cecece' }} /> 
                </S.textWithLine>
            ))}
        </S.layout>
    );
};

export default ClassType;


