import React, {useState} from 'react';
import * as S from './Styles';
import Header from '../../components/Header/Header';
import myBigRectangle from '../../assets/my_image/my_big_rectangle.svg';
import myHayangi from '../../assets/my_image/my_hayangi.svg';
import myDelete from '../../assets/my_image/my_delete.svg';
import myLogout from '../../assets/my_image/my_logout.svg';
import myPassword from '../../assets/my_image/my_password.svg';
import myRectangle from '../../assets/my_image/my_rectangle.svg';
import myMajorChange from '../../assets/my_image/my_major_change.svg';
import majorOne from '../../assets/my_image/major_one.svg';
import majorTwo from '../../assets/my_image/major_two.svg';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userInfoState } from '../../recoil/states/Userstate';

const MyPage: React.FC = () => {
  const navigate = useNavigate();

  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);
  const handleLogout = () => {
    closePopup();
    navigate('/'); 
  };

  const userInfo = useRecoilValue(userInfoState);

  const goToMajorChange = () => {
    navigate('/Mypage/MajorChange'); 
  };

  const handlePasswordClick = () => {
    navigate('/mypage/password');
  };

  return (
    <S.Layout>

      <>
        <div style={{ position: 'absolute', top: 0, width: '100%', zIndex: 1000, display: 'flex', justifyContent: 'space-between' }}>
          <Header backarrow={true} />
          <img 
            src={myLogout} 
            alt="my logout" 
            style={{ width: '43px', height: '13px', position: 'absolute', top: '40px', right: '30px' }} 
            onClick={openPopup}
          />
        </div>

        {showPopup && (
          <S.PopupOverlay onClick={closePopup}>
            <S.PopupContent onClick={(e) => e.stopPropagation()}> 
              <S.PopupTitle>로그아웃</S.PopupTitle>
              <S.PopupDescription>로그아웃 하시겠습니까?</S.PopupDescription>
              <S.ButtonContainer>
                <S.CloseButton onClick={closePopup}>닫기</S.CloseButton>
                <S.ConfirmButton onClick={handleLogout}>확인</S.ConfirmButton>
              </S.ButtonContainer>
            </S.PopupContent>
          </S.PopupOverlay>
        )}
      </>

      <S.Top>
        <S.MyBigRectangle>
          <S.MainImage src={myBigRectangle} alt="my big rectangle" />
          <S.MyHayangi src={myHayangi} alt="my hayangi" />
          <S.NameText>{userInfo.name}</S.NameText>
        </S.MyBigRectangle>
      </S.Top>

      <S.TextImageContainer>
        <S.MajorText>전공</S.MajorText>
        <S.MyMajorChange src={myMajorChange} alt="right image" onClick={goToMajorChange}/>
      </S.TextImageContainer>

      <S.MajorRectangleContainer>
        <S.MajorRectangle src={myRectangle} alt="Major image" /> 
        <S.OverlayContainer>
          <S.ImageContainer>
            <S.MajorImage1 src={majorOne} alt="First Image" />
            <S.MajorText1>{userInfo.major}</S.MajorText1>
          </S.ImageContainer>

          <S.Divider />

          <S.ImageContainer>
            <S.MajorImage2 src={majorTwo} alt="Second Image" />
            <S.MajorText2>{userInfo.doubleMajor}</S.MajorText2>
          </S.ImageContainer>
        </S.OverlayContainer>
      </S.MajorRectangleContainer>
    

      <S.Account>
        <S.AccountTitle>계정</S.AccountTitle>
      </S.Account>

      <S.IdContainer>
        <S.IdText>아이디</S.IdText>
        <S.IdNameText>{userInfo.name}</S.IdNameText>
      </S.IdContainer>

      <S.Bottom>
        <S.ImageWrapper onClick={handlePasswordClick}>
          <S.MyPassword src={myPassword} alt="First image" />
        </S.ImageWrapper>

        <S.ImageWrapper>
          <S.MyDelete src={myDelete} alt="Second image" />
        </S.ImageWrapper>
      </S.Bottom>
      
    </S.Layout>
  )
}


export default MyPage;