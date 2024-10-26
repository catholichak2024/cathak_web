import React, { useState } from 'react';
import * as S from './Styles';
import Header from '../../../components/Header/Header';
import { useNavigate } from 'react-router-dom';
import submitIcon2 from '../../../assets/login_image/login_find.svg';
import { useRecoilValue } from 'recoil';
import { passwordState } from '../../../recoil/states/PasswordState';

const SignupFind: React.FC = () => {
  const navigate = useNavigate();

  const [studentId, setStudentId] = useState('');
  const [username, setUsername] = useState('');
  const [studentIdError, setStudentIdError] = useState('');
  const [usernameError, setUsernameError] = useState('');

  // 유효성 검사 함수들
  const validateStudentId = () => {
    if (!studentId) {
      setStudentIdError('학번을 입력해주세요');
      return false;
    }
    setStudentIdError('');
    return true;
  };

  const validateUsername = () => {
    if (!username) {
      setUsernameError('아이디를 입력해주세요');
      return false;
    }
    setUsernameError('');
    return true;
  };

  const isFormValid = studentId !== '' && username !== '' && studentIdError === '' && usernameError === '';

  // 제출 시 검증 및 API 호출
  const handleSubmit = async () => {
    const isStudentIdValid = validateStudentId();
    const isUsernameValid = validateUsername();

    if (!isStudentIdValid || !isUsernameValid) {
      return;
    }

    try {
      const response = await fetch('http://13.125.38.246:3000/EveryGrade/user/findPw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          number: studentId,
          id: username,
        }),
      });

      console.log("HTTP Status Code:", response.status); // HTTP 상태 코드 확인

      if (response.ok && response.status === 200) {
        const data = await response.json();
        console.log("비밀번호 찾기 요청 성공:", data.message);
        navigate('/SignupNext');
      } else {
        console.log("비밀번호 찾기 요청 실패.");
        setStudentIdError('존재하지 않는 학번입니다.');
        setUsernameError('존재하지 않는 아이디입니다.');
      }
    } catch (error) {
      console.error('서버 오류:', error);
      setStudentIdError('서버와의 연결에 문제가 발생했습니다.');
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
          등록된 학번과 아이디로 <br />
          비밀번호를 찾으실 수 있습니다.
        </S.Description>
        <S.HorizontalLine />
      </S.Top>

      <S.Middle>
        <S.Label>학번</S.Label>
        <S.Input
          type="text"
          value={studentId}
          placeholder="학번 입력"
          onChange={(e) => setStudentId(e.target.value)}
          onBlur={validateStudentId}
          hasError={studentIdError !== ''}
        />
        <S.ErrorMessage isVisible={studentIdError !== ''}>{studentIdError}</S.ErrorMessage>

        <S.Label>아이디</S.Label>
        <S.Input
          type="text"
          value={username}
          placeholder="아이디 입력"
          onChange={(e) => setUsername(e.target.value)}
          onBlur={validateUsername}
          hasError={usernameError !== ''}
        />
        <S.ErrorMessage isVisible={usernameError !== ''}>{usernameError}</S.ErrorMessage>

        <S.SubmitButton onClick={handleSubmit} disabled={!isFormValid}>
          <img src={submitIcon2} alt="아이콘" />
        </S.SubmitButton>
      </S.Middle>
    </S.Layout>
  );
};

export default SignupFind;
