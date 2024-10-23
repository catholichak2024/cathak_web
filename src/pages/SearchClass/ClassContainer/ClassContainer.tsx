


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
        </S.Layout>
    );
};

export default ClassContainer;

// import React from 'react';
// import * as S from './Styles';
// import { useRecoilValue } from 'recoil';
// import { classInfoType } from '../../../recoil/types/classdetail';
// import { userInfoState } from '../../../recoil/states/Userstate';
// import { useTheme } from 'styled-components';
// import { NotsaveClass, SaveClass } from '../../../assets/icon';

// interface Props {
//     data: classInfoType[];
// }

// const ClassContainer = ({ data }: Props) => {
//     const theme = useTheme();
//     const user = useRecoilValue(userInfoState);

//     //추후에 saveClass를 user.attendedClasses에 추가해야함
//     return (
//         <S.Layout>
//             {data.map((d) => (
//                 <S.Container key={d.classId}>
//                     <S.ClassName>{d.className}</S.ClassName>
//                     <S.Credit>{d.credit}학점s</S.Credit>
//                     <S.IconWrapper>
//                         {user.attendedClasses.includes(d.classId) ? (
//                             <SaveClass />
//                         ) : (
//                             <NotsaveClass />
//                         )}
//                     </S.IconWrapper>
//                 </S.Container>
//             ))}
//         </S.Layout>
//     );
// }

// export default ClassContainer;
