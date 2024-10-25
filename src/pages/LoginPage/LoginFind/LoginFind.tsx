import React, { useState } from 'react';
import * as S from './Styles';
import Header from '../../../components/Header/Header';
import { useNavigate } from 'react-router-dom';
import submitIcon2 from '../../../assets/login_image/login_find.svg';

const LoginFind: React.FC = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [nameError, setNameError] = useState('');
  const [studentIdError, setStudentIdError] = useState('');

  // 이름 유효성 검사
  const validateName = () => {
    if (name.length < 2 || name.length > 7) {
      setNameError('이름을 입력해주세요'); 
      return false;
    } else {
      setNameError(''); 
      return true;
    }
  };

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

  // 제출 버튼 활성화 조건
  const isFormValid = name !== '' && studentId !== '' && nameError === '' && studentIdError === '';

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
          onBlur={validateName}
          hasError={nameError !== ''} // 에러가 있는지 여부에 따라 hasError 설정
        />
        <S.ErrorMessage isVisible={nameError !== ''}>{nameError}</S.ErrorMessage>

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



        <S.SubmitButton
          onClick={handleSubmit}
          disabled={!isFormValid} // 조건을 충족하지 않으면 비활성화
        >
          <img src={submitIcon2} alt="아이콘" />
        </S.SubmitButton>

      </S.Middle>
    </S.Layout>
  );
};

export default LoginFind;
