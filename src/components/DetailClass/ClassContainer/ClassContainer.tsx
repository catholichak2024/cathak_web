import React from 'react';
import * as S from './Styles';
import { useRecoilValue } from 'recoil';
import { classInfoType } from '../../../recoil/types/classdetail';
import { userInfoState } from '../../../recoil/states/Userstate';
import { useTheme } from 'styled-components';
import { NotsaveClass, SaveClass } from '../../../assets/icon';
interface props {
    data: classInfoType[];
}

const ClassContainer = ({ data}: props) => {
    const theme = useTheme();
    const user = useRecoilValue(userInfoState);

    return(
        <S.Layout>
            {data.map((d) => (
                <S.Container key={d.classId}>
                    <S.ClassName>{d.className}</S.ClassName>
                    <S.Credit>{d.credit}학점</S.Credit>
                    <S.IconWrapper>
                        {user.attendedClasses.includes(d.classId) ? (
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