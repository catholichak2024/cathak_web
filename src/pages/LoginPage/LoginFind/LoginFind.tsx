import React, { useState } from 'react';
import * as S from './Styles';
import Header from '../../../components/Header/Header';
import { useNavigate } from 'react-router-dom';
import submitIcon2 from '../../../assets/login_image/login_find.svg';
import { useRecoilValue } from 'recoil';
import { userState } from '../../../recoil/states/UserFindstate';

const LoginFind: React.FC = () => {
  const navigate = useNavigate();
  const userInfo = useRecoilValue(userState);

  const [name, setName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [nameError, setNameError] = useState('');
  const [studentIdError, setStudentIdError] = useState('');


  const handleSubmit = async () => {
    if (!name || !studentId) return;

    try {
      const response = await fetch('https://www.everygrade.store/EveryGrade/user/findId', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          number: studentId,
        }),
      });

      console.log("HTTP Status Code:", response.status);

      if (response.ok) {
        const data = await response.json();
        console.log("아이디가 일치합니다:", data.id);
        navigate('/home');
      } else {
        console.log("아이디가 일치하지 않습니다.");
        setNameError('이름을 제대로 입력해주세요.');
        setStudentIdError('존재하지 않는 학번입니다.');
      }
    } catch (error) {
      console.error('서버 오류:', error);
      setNameError('서버와의 연결에 문제가 발생했습니다.');
    }

    const validateInputs = () => {
      if (name) {
        setNameError('');
      }
      if (studentId) {
        setStudentIdError('');
      }
    };
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
          onBlur={() => {
            if (!name) {
              setNameError('이름을 입력해주세요');
            } else {
              setNameError('');
            }
          }}
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
          onBlur={() => {
            if (!studentId) {
              setStudentIdError('학번을 입력해주세요');
            } else {
              setStudentIdError(''); // 입력이 정상적으로 되었을 경우 오류 초기화
            }
          }}
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
