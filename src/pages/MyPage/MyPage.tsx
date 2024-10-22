import React from 'react';
import * as S from './Styles';
import myRectangle from '../../assets/my_image/my_big_rectangle.svg'

const MyPage: React.FC = () => {
  return (
    <S.Layout>
      <S.Top>
        <S.MyRectangle src={myRectangle} alt="my rectangle" />
      </S.Top>
    </S.Layout>
  )
}

export default MyPage;