import React, { useState } from 'react';
import * as S from './Styles';
import Header from '../../../components/Header/Header';
import { useNavigate } from 'react-router-dom';
import submitIcon2 from '../../../assets/login_image/login_find.svg';
import { useRecoilValue } from 'recoil';
import { userInfoState } from '../../../recoil/states/Userstate';

const LoginFind: React.FC = () => {
  const navigate = useNavigate();
  const userInfo = useRecoilValue(userInfoState);

  const [name, setName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [nameError, setNameError] = useState('');
  const [studentIdError, setStudentIdError] = useState('');

  // 제출 버튼 클릭 시 처리
  const handleSubmit = () => {
    if (userInfo.name === name && userInfo.studentid.toString() === studentId) {
      console.log("아이디가 일치합니다:", userInfo.name);
      navigate('/nextpage');
    } else {
      console.log("아이디가 일치하지 않습니다.");
      setNameError('이름을 제대로 입력해주세요.');
      setStudentIdError('존재하지 않는 학번입니다.');
    }
  };

  // 유효성 검사
  const validateInputs = () => {
    setNameError('');
    setStudentIdError('');
  };

  return (
    <S.Layout>
      <Header backarrow={true} />
      <S.Top>
        <S.TitleContainer>
          <S.TitleText>아이디 찾기</S.TitleText>
        </S.TitleContainer>

        <S.Description>
          등록된 이름과 학번으로<br />
          아이디를 찾으실 수 있습니다.
        </S.Description>
        <S.HorizontalLine />
      </S.Top>

      <S.Middle>
        <S.Label>이름</S.Label>
        <S.Input
          type="text"
          value={name}
          placeholder="이름 입력"
          onChange={(e) => setName(e.target.value)}
          onBlur={validateInputs}
          hasError={nameError !== '' || name === ''}
        />
        <S.ErrorMessage isVisible={nameError !== '' || name === ''}>
          {nameError || '이름을 입력해주세요'}
        </S.ErrorMessage>

        <S.Label>학번</S.Label>
        <S.Input
          type="text"
          value={studentId}
          placeholder="학번 입력"
          onChange={(e) => setStudentId(e.target.value)}
          onBlur={validateInputs}
          hasError={studentIdError !== '' || studentId === ''}
        />
        <S.ErrorMessage isVisible={studentIdError !== '' || studentId === ''}>
          {studentIdError || '학번을 입력해주세요'}
        </S.ErrorMessage>

        <S.SubmitButton onClick={handleSubmit} disabled={!name || !studentId}>
          <img src={submitIcon2} alt="아이콘" />
        </S.SubmitButton>
      </S.Middle>
    </S.Layout>
  );
};

export default LoginFind;
