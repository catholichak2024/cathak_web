import React from 'react';
import * as S from './Styles'; // 스타일 컴포넌트 불러오기
import { RedStar } from '../../../assets/icon';

const EssentailBox: React.FC<{ description: string }> = ({ description }) => {
  return (
    <S.Layout>
        <S.Container>
             <S.RedStarBox>
                <RedStar />
             </S.RedStarBox>
             <S.RequiredText>필수</S.RequiredText>
        </S.Container>
        <S.DescriptionText>{description}</S.DescriptionText>
    </S.Layout>
  );
};

export default EssentailBox;
