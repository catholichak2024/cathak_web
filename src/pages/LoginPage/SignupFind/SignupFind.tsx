import React, { useState } from 'react';
import * as S from './Styles';
import Header from '../../../components/Header/Header';
import { useNavigate } from 'react-router-dom';
import submitIcon2 from '../../../assets/login_image/login_find.svg';
import { useRecoilValue } from 'recoil';
import { userInfoState } from '../../../recoil/states/Userstate';

const SignupFind: React.FC = () => {
  const navigate = useNavigate();
  const userInfo = useRecoilValue(userInfoState);

  const [studentId, setStudentId] = useState('');
  const [username, setUsername] = useState('');
  const [studentIdError, setStudentIdError] = useState('');
  const [usernameError, setUsernameError] = useState('');

  // 학번 유효성 검사
  const validateStudentId = () => {
    if (userInfo.studentid.toString() !== studentId) {
      setStudentIdError('존재하지 않는 학번입니다');
      return false;
    } else {
      setStudentIdError('');
      return true;
    }
  };

  // 아이디 유효성 검사
  const validateUsername = () => {
    if (userInfo.name !== username) {
      setUsernameError('존재하지 않는 아이디입니다');
      return false;
    } else {
      setUsernameError('');
      return true;
    }
  };

  const isFormValid =
    studentId !== '' && username !== '' && studentIdError === '' && usernameError === '';

  // 제출 시 검증 및 페이지 이동
  const handleSubmit = () => {
    if (isFormValid) {
      navigate('/SignupNext'); // 다음 페이지로 이동
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
