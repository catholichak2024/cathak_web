import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { theme } from './styles/colors';
import { ThemeProvider } from 'styled-components';
import MainScreen from './components/MainScreen';
import HomePage from './pages/Home/Home';
import SearchPage from './pages/SearchClass/SearchClass';
import DetailClassMainPage from './pages/DetailClass/detailClassMainPage';
import SplashPage from './pages/Splash/Splash';
function App() {
  return (
    <RecoilRoot>
      <Router>
        <MainScreen>
          <ThemeProvider theme={theme}>
            <Routes>
              <Route path="/" element={<SplashPage />} />
              <Route path="home" element={<HomePage />} />
              <Route path="searchclass" element={<SearchPage />} />
              <Route path="detailclass/general" element={<DetailClassMainPage />} />
            </Routes>
          </ThemeProvider>
        </MainScreen>
      </Router>
    </RecoilRoot>
  );
}

export default App;
