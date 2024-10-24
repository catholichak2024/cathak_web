import React from 'react';
import ClassInfoTitle from './ClassInfoTitle';
import * as S from './Styles'; // 스타일 파일

const ClassInfoTitleBox: React.FC = () => {
    return (
        <S.Container>
            <ClassInfoTitle text="과목명" />
            <ClassInfoTitle text="학점" />
            <ClassInfoTitle text="성적" />
        </S.Container>
    );
};

export default ClassInfoTitleBox;
