import React, { useEffect } from 'react';
import * as S from './Styles';
import { Hayang } from '../../assets/icon';
import { useNavigate } from 'react-router-dom';

const Splash: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home'); 
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate('/home')]);

  return (
    <S.Layout>
      <Hayang />
    </S.Layout>
  );
};

export default Splash;