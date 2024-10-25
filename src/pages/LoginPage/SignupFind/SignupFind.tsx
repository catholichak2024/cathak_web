import React, { useState } from 'react';
import * as S from './Styles';
import Header from '../../../components/Header/Header';
import { useNavigate } from 'react-router-dom';
import submitIcon2 from '../../../assets/login_image/login_find.svg';

const SignupFind: React.FC = () => {
  const navigate = useNavigate();

  const [studentId, setStudentId] = useState('');
  const [username, setUsername] = useState('');
  const [studentIdError, setStudentIdError] = useState('');
  const [usernameError, setUsernameError] = useState('');

  // 학번 유효성 검사
  const validateStudentId = () => {
    const isNumber = /^[0-9]+$/.test(studentId); 
    if (!isNumber || studentId.length !== 9) {
      setStudentIdError('존재하지 않는 학번입니다'); 
      return false;
    } else {
      setStudentIdError(''); 
      return true;
    }
  };

  // 아이디 유효성 검사 (영문+숫자 조합, 3~12자)
  const validateUsername = () => {
    const isValid = /^[a-zA-Z0-9]{3,12}$/.test(username);
    if (!isValid) {
      setUsernameError('존재하지 않는 아이디입니다');
      return false;
    } else {
      setUsernameError('');
      return true;
    }
  };

  // 제출 버튼 활성화 조건
  const isFormValid = studentId !== '' && username !== '' && studentIdError === '' && usernameError === '';

  // 제출 버튼 클릭 시 처리
  const handleSubmit = () => {
    if (isFormValid) {
      navigate('/nextpage'); // 조건 충족 시 이동할 경로 설정
    }
  };

  return (
    <S.Layout>
      <Header backarrow={true} />
      <S.Top>
        <S.TitleContainer>
          <S.TitleText>비밀번호 찾기</S.TitleText>
        </S.TitleContainer>

        <S.Description>
          등록된 학번과 아이디로<br />
          회원가입을 진행할 수 있습니다.
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
          hasError={studentIdError !== ''} // 에러가 있는지 여부에 따라 hasError 설정
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

        <S.SubmitButton
          onClick={handleSubmit}
          disabled={!isFormValid} 
        >
          <img src={submitIcon2} alt="아이콘" />
        </S.SubmitButton>
      </S.Middle>
    </S.Layout>
  );
};

export default SignupFind;
