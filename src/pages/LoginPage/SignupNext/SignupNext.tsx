import React, { useState, useMemo } from 'react';
import * as S from './Styles';
import Header from '../../../components/Header/Header';
import { useNavigate } from 'react-router-dom';
import submitIcon1 from '../../../assets/psw/psw_complete.svg';

const SignupNext: React.FC = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // 비밀번호 유효성 검사
  const validatePassword = (password: string) => {
    const isValid = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{5,15}$/.test(password);
    setPasswordError(isValid ? '' : '영문+숫자+특수문자 조합의 5-15자리 비밀번호 입력');
  };

  // 비밀번호 일치 확인
  const isFormValid = useMemo(() => {
    return password && confirmPassword && password === confirmPassword && !passwordError;
  }, [password, confirmPassword, passwordError]);

  // 제출 버튼 클릭 시 처리
  const handleSubmit = () => {
    if (isFormValid) {
      navigate('/Login');
    }
  };

  return (
    <S.Layout>
      <Header backarrow={true} />
      <S.Top>
        <S.TitleContainer>
          <S.TitleText>새 비밀번호 생성하기</S.TitleText>
        </S.TitleContainer>

        <S.Description>
        등록된 학번과 아이디로 <br/>
        비밀번호를 찾으실 수 있습니다.
        </S.Description>
        <S.HorizontalLine />
      </S.Top>

      <S.Middle>
        <S.Label>비밀번호</S.Label>
        <S.Input
          type="password"
          value={password}
          placeholder="영문+숫자+특수문자 조합의 5-15자리 비밀번호 입력"
          onChange={(e) => setPassword(e.target.value)}
          onBlur={() => validatePassword(password)} // 포커스 아웃 시 검증
          hasError={passwordError !== ''}
        />
        <S.ErrorMessage isVisible={passwordError !== ''}>{passwordError}</S.ErrorMessage>

        <S.Label>비밀번호 확인</S.Label>
        <S.Input
          type="password"
          value={confirmPassword}
          placeholder="비밀번호 확인"
          onChange={(e) => setConfirmPassword(e.target.value)}
          hasError={Boolean(confirmPassword && password !== confirmPassword)} // 비밀번호가 일치하지 않으면 true
        />
        <S.ErrorMessage isVisible={Boolean(confirmPassword && password !== confirmPassword)}>
          비밀번호가 일치하지 않습니다.
        </S.ErrorMessage>

        <S.SubmitButton onClick={handleSubmit} disabled={!isFormValid}>
          <img src={submitIcon1} alt="아이콘" />
        </S.SubmitButton>
      </S.Middle>
    </S.Layout>
  );
};

export default SignupNext;
