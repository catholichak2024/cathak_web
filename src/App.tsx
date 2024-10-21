import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { theme } from './styles/colors';
import { ThemeProvider } from 'styled-components';
import MainScreen from './components/MainScreen';

function App() {
  return (
    <RecoilRoot>
      <Router>
        <MainScreen>
          <ThemeProvider theme={theme}>
            <Routes>

            </Routes>
          </ThemeProvider>
        </MainScreen>
      </Router>
    </RecoilRoot>
  );
}

export default App;
