import React, { useEffect, useState } from 'react';
import * as S from './Styles';
import Header from '../../../components/Header/Header';
import { useNavigate } from 'react-router-dom';
import pswImage from '../../../assets/psw/psw_lock.svg';
import submitIcon from '../../../assets/psw/psw_complete.svg';
import { useRecoilState } from 'recoil';
import { passwordChangeState } from '../../../recoil/states/PasswordChangestates';

const Password: React.FC = () => {
  const navigate = useNavigate();

  const [currentPassword, setCurrentPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [passwordChange, setPasswordChange] = useRecoilState(passwordChangeState);

  const validatePassword = (password: string) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_]).{5,15}$/;
    return passwordRegex.test(password);
  };

  const handleBackClick = () => {
    navigate(-1); 
  };

  useEffect(() => {
    const backButton = document.querySelector('button'); 
    if (backButton) {
      backButton.addEventListener('click', handleBackClick);
    }

    return () => {
      if (backButton) {
        backButton.removeEventListener('click', handleBackClick);
      }
    };
  }, []);

  useEffect(() => {
    setPasswordChange({ pw: "" }); 
  }, []);

  const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    console.log('새 비밀번호 입력됨:', password); 
    setPasswordChange({ pw: password });

    if (!validatePassword(password)) {
      setPasswordError('영문+숫자+특수문자 조합의 15자리 비밀번호를 입력하세요.');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('폼 제출됨');
  
    if (!validatePassword(passwordChange.pw)) {
      return;
    }
  
    if (currentPassword === passwordChange.pw) {
      setPasswordError('새 비밀번호는 현재 비밀번호와 다르게 입력해주세요.');
      return;
    }
  
    try {
      const token = localStorage.getItem('token');

      const response = await fetch('https://www.everygrade.store/EveryGrade/mypage/pw', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ pw: passwordChange.pw }), // 명세에 맞게 수정
      });
  
      const data = await response.json();
      console.log('서버 응답 데이터:', data);
  
      if (data.isSuccess && data.code === 200) {
        setShowPopup(true);
      } else {
        setPasswordError(data.message || '현재 비밀번호가 올바르지 않습니다.');
      }
    } catch (error) {
      console.error('비밀번호 변경 중 오류 발생:', error);
    }
  };
  
  useEffect(() => {
    if (showPopup) {
      console.log('Popup 상태가 true로 변경되었습니다');
      setTimeout(() => navigate('/home'), 1000); // 1초 후 홈 화면으로 이동
    }
  }, [showPopup, navigate]);

  const closePopup = () => {
    if (showPopup) {
      navigate('/home'); 
    }
    setShowPopup(false);
  };

  return (
    <S.Layout>
      <Header backarrow={true} />
      <S.Form onSubmit={handleSubmit} autoComplete="off">
        <S.UsernameInput
          type="text"
          name="username"
          autoComplete="username"
        />
        
        <S.Top>
          <S.TitleContainer>
            <S.TitleText>비밀번호 변경하기</S.TitleText>
            <S.PswImage src={pswImage} alt="이미지" />
          </S.TitleContainer>

          <S.Description>
            비밀번호 변경을 위해<br />
            현재 비밀번호를 입력해주세요.
          </S.Description>
          <S.HorizontalLine />
        </S.Top>

        <S.Middle>
          <S.Label>현재 비밀번호</S.Label>
          <S.Input
            type="password"
            value={currentPassword}
            placeholder="현재 비밀번호 입력"
            onChange={(e) => setCurrentPassword(e.target.value)}
            autoComplete="current-password"
          />

          <S.Label>변경할 비밀번호</S.Label>
          <S.Input
            type="password"
            value={passwordChange.pw}
            placeholder="변경할 비밀번호 입력"
            onChange={handleNewPasswordChange}
            autoComplete="new-password"
          />
          <S.HelperText>영문+숫자+특수문자 조합의 15자리 비밀번호를 입력하세요.</S.HelperText>

          {passwordError && <S.ErrorMessage>{passwordError}</S.ErrorMessage>}

          <S.SubmitButton
            type="submit"
            disabled={passwordError !== '' || currentPassword === ''}
          >
            <img src={submitIcon} alt="아이콘" />
          </S.SubmitButton>
        </S.Middle>
      </S.Form>

      {showPopup && (
        <S.PopupOverlay onClick={closePopup}>
          <S.PopupContent>
            <S.PopupTitle>비밀번호 변경 완료</S.PopupTitle>
            <S.PopupDescription>비밀번호 변경이 정상적으로 완료되었습니다.</S.PopupDescription>
          </S.PopupContent>
        </S.PopupOverlay>
      )}
    </S.Layout>
  );
};

export default Password;
