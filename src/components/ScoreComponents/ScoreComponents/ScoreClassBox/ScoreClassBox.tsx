import React from 'react';
import * as S from './Styles';
import ClassInfoTitleBox from './classInfoTitleBox/ClassInfoTitleBox';
import DividingLine from './DividingLine';
import ClassContainer from './ClassContainer/ClassContainer';

interface ScoreClassBoxProps {
    grades: {
        id: number;
        subject_name: string;
        str_score: string | null;
        credit: number;
    }[];
    selectedGrades: { [key: number]: string | null };
    setSelectedGrades: React.Dispatch<React.SetStateAction<{ [key: number]: string | null }>>;
}

const ScoreClassBox: React.FC<ScoreClassBoxProps> = ({ grades, selectedGrades, setSelectedGrades }) => {
    return (
        <S.Layout>
            <S.ScoreContainer>
                <ClassInfoTitleBox />
                <DividingLine />
                <S.ClassBox>
                    <ClassContainer
                        grades={grades}
                        selectedGrades={selectedGrades}
                        setSelectedGrades={setSelectedGrades}
                    />
                </S.ClassBox>
            </S.ScoreContainer>
        </S.Layout>
    );
}

export default ScoreClassBox;
