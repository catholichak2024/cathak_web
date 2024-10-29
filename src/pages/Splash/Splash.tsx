import React, { useEffect } from 'react';
import * as S from './Styles';
import { EggLogo } from '../../assets/icon';
import { useNavigate } from 'react-router-dom';
import { Ellipse } from '../../assets/icon';

const Splash: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login'); 
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigate('/login')]);

  return (
    <S.Layout>
      <S.Logo>
        <EggLogo />
      </S.Logo>
      <S.Content>
        <Ellipse />
        <S.MainText>EVERY GRADE</S.MainText>
        <S.SubText>꼼꼼한 대학생활을 위해,</S.SubText>
      </S.Content>
      
    </S.Layout>
  );
};

export default Splash;