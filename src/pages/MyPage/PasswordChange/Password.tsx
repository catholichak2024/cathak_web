import React, { useEffect, useState }  from 'react';
import * as S from './Styles';
import Header from '../../../components/Header/Header';
import { useNavigate } from 'react-router-dom';
import pswImage from '../../../assets/psw/psw_lock.svg';
import submitIcon from '../../../assets/psw/psw_complete.svg';
import pswPopup from '../../../assets/psw/psw_popup.svg';

const MyPassword: React.FC = () => {
  const navigate = useNavigate();

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const validatePassword = (password: string) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_]).{15,}$/;
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

  const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    setNewPassword(password);

    if (!validatePassword(password)) {
      setPasswordError('영문+숫자+특수문자 조합의 15자리 비밀번호를 입력하세요.');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = () => {
    if (validatePassword(newPassword)) {
      setShowPopup(true);
    } 
  };

  const closePopup = () => {
    setShowPopup(false); 
    navigate('/home'); 
  };

  return (
    <S.Layout>
      <Header backarrow={true} />
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
        />

        <S.Label>변경할 비밀번호</S.Label>
        <S.Input
          type="password"
          value={newPassword}
          placeholder="변경할 비밀번호 입력"
          onChange={handleNewPasswordChange}
        />
        <S.HelperText>영문+숫자+특수문자 조합의 15자리 비밀번호를 입력하세요.</S.HelperText>

        {passwordError && <S.ErrorMessage>{passwordError}</S.ErrorMessage>}

        <S.SubmitButton
          onClick={handleSubmit}
          disabled={passwordError !== '' || currentPassword === ''}
        >
          <img src={submitIcon} alt="아이콘" />
        </S.SubmitButton>

      </S.Middle>

      {showPopup && (
        <S.PopupOverlay onClick={closePopup}>
          <S.PopupContent>
            <S.PopupTitle>비밀번호 변경 완료</S.PopupTitle>
            <S.PopupDescription>비밀번호 변경이 정상적으로 완료되었습니다.</S.PopupDescription>
            {/* <S.CloseButton onClick={closePopup}>확인</S.CloseButton> */}
          </S.PopupContent>
        </S.PopupOverlay>
      )}

    </S.Layout>
  );
};

export default MyPassword;
