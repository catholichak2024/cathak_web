import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { theme } from './styles/colors';
import { ThemeProvider } from 'styled-components';
import MainScreen from './components/MainScreen';
import HomePage from './pages/Home/Home';
import MyPage from './pages/MyPage/MyPage';
import MajorChange from './pages/MyPage/MajorChange/MajorChange';
import SearchPage from './pages/SearchClass/SearchClass';
import DetailClassMainPage from './pages/DetailClass/detailClassMainPage';
import SplashPage from './pages/Splash/Splash';
import LoginPage from './pages/LoginPage/LoginPage';
import LoginFind from './pages/LoginPage/LoginFind/LoginFind';
import SignupFind from './pages/LoginPage/SignupFind/SignupFind';
import SignupNext from './pages/LoginPage/SignupNext/SignupNext';
import LoginComplete from './pages/LoginPage/LoginComplete/LoginComplete';
import NextLoginPage from './pages/LoginPage/LoginNextPage/NextLoginPage';
import ScorePage from './pages/Score/ScorePage';
import Password from './pages/MyPage/PasswordChange/Password';
import SignUp from './pages/SignUp/SignUp';
import Chatbot from './pages/chatbot/Chatbot';
import GlobalStyles from './styles/GlobalStyles';


function App() {
  
  return (
    <RecoilRoot>
      <Router>
        <MainScreen>
          <ThemeProvider theme={theme}>
            <GlobalStyles/>
              <Routes>
                <Route path="/" element={<SplashPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="login/nextlogin" element={<NextLoginPage />} />
                <Route path="loginfind" element={<LoginFind />}/>
                <Route path="signup" element={<SignUp/>} />
                <Route path="signupfind" element={<SignupFind />}/>
                <Route path="signupNext" element={<SignupNext />}/>
                <Route path="logincomplete" element={<LoginComplete />}/>
                <Route path="home" element={<HomePage />} />
                <Route path="mypage" element={<MyPage/>}/>
                <Route path="mypage/majorchange" element={<MajorChange/>}/>
                <Route path="mypage/password" element={<Password/>}/>
                <Route path="searchclass" element={<SearchPage />} />
                <Route path="/searchclass/chatbot" element={<Chatbot />} />
                <Route path="detailclass/general" element={<DetailClassMainPage />} />
                <Route path="detailclass/majorbasic" element={<DetailClassMainPage />} />
                <Route path="detailclass/major1" element={<DetailClassMainPage />} />
                <Route path="detailclass/major12" element={<DetailClassMainPage />} />
                <Route path="detailclass/majorsecond" element={<DetailClassMainPage />} />
                <Route path="scoreInfo" element={<ScorePage />} />
                
              </Routes>
           
          </ThemeProvider>
        </MainScreen>
      </Router>
    </RecoilRoot>
  );
}

export default App;
