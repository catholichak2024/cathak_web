import React, { useState } from 'react';
import * as S from './Styles';
import { useRecoilValue } from 'recoil';
import { classInfoType } from '../../../recoil/types/classdetail';
import { userInfoState } from '../../../recoil/states/Userstate';
import { NotsaveClass, SaveClass } from '../../../assets/icon';

interface props {
    data: classInfoType[];
}

const ClassContainer = ({ data}: props) => {
    const user = useRecoilValue(userInfoState);
    const [savedClasses, setSavedClasses] = useState<number[]>(user.attendedClasses);
    
    const handleToggleSave = (classId: number) => {
        setSavedClasses(prev =>
            prev.includes(classId)
                ? prev.filter(id => id !== classId)
                : [...prev, classId]
        );
    };

    return(
        <S.Layout>
            {data.map((d) => (
                <S.Container key={d.classId}>
                    <S.ClassName>{d.className}</S.ClassName>
                    <S.Credit>{d.credit}학점</S.Credit>
                    <S.IconWrapper onClick={() => handleToggleSave(d.classId)}>
                        {savedClasses.includes(d.classId) ? (
                            <SaveClass />
                        ) : (
                            <NotsaveClass />
                        )}
                    </S.IconWrapper>
                </S.Container>
            ))}
        </S.Layout>
    )
}

export default ClassContainer;