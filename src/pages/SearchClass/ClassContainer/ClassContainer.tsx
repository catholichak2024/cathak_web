import React, { useState } from 'react';
import * as S from './Styles';
import { NotsaveClass, SaveClass } from '../../../assets/icon';
import { classInfoType } from '../../../recoil/types/classdetail';
import { userInfoType } from '../../../recoil/types/userdetail';

interface Props {
    data: classInfoType[];
    user:userInfoType;
}
const ClassContainer = ({ data,user }: Props) => {
    const [savedClasses, setSavedClasses] = useState<number[]>(user.attendedClasses);

    const handleToggleSave = (classId: number) => {
        setSavedClasses(prev =>
            prev.includes(classId)
                ? prev.filter(id => id !== classId)
                : [...prev, classId]
        );
    };

    return (
        <S.Layout>
            <S.ClassBox>
            {data.map((d) => (
                <S.Container key={d.classId}>
                    <S.ClassName>{d.className}</S.ClassName>
                    <S.Credit>{d.credit}학점</S.Credit>
                    <S.IconWrapper onClick={() => handleToggleSave(d.classId)}>
                        {savedClasses.includes(d.classId) ? (
                            <SaveClass style={{cursor:'pointer'}}/>
                        ) : (
                            <NotsaveClass />
                        )}
                    </S.IconWrapper>
                </S.Container>
            ))}
            </S.ClassBox>
        </S.Layout>
    );
};

export default ClassContainer;

