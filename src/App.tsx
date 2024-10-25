import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { theme } from './styles/colors';
import { ThemeProvider } from 'styled-components';
import MainScreen from './components/MainScreen';
import HomePage from './pages/Home/Home';
import MyPage2 from './pages/MyPage/MyPage2';
import MajorChange from './pages/MyPage/MajorChange';
import SearchPage from './pages/SearchClass/SearchClass';
import DetailClassMainPage from './pages/DetailClass/detailClassMainPage';
import SplashPage from './pages/Splash/Splash';
import ScorePage from './pages/Score/ScorePage';

function App() {
  return (
    <RecoilRoot>
      <Router>
        <MainScreen>
          <ThemeProvider theme={theme}>
            <Routes>
              <Route path="/" element={<SplashPage />} />
              <Route path="home" element={<HomePage />} />
              <Route path="mypage" element={<MyPage2/>}/>
              <Route path="mypage/majorchange" element={<MajorChange/>}/>
              <Route path="searchclass" element={<SearchPage />} />
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
