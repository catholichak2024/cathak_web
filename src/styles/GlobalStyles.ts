import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export default createGlobalStyle`
    ${reset}
    *, *::before, *::after {
        box-sizing: border-box;
    }

    /* Pretendard 폰트 추가 - 다양한 굵기 */
    @font-face { 
        font-family: 'Pretendard';
        src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Light.woff') format('woff');
        font-weight: 100;
        font-style: normal;
    }
    @font-face { 
        font-family: 'Pretendard';
        src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Medium.woff') format('woff');
        font-weight: 500;
        font-style: normal;
    }
    @font-face { 
        font-family: 'Pretendard';
        src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff') format('woff');
        font-weight: 700;
        font-style: normal;
    }

    a {
        color: inherit;
    }
    ul {
        list-style: none;
    }
    body {
        padding: 0;
        margin: 0;
        font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    }
    button {
        border: none;
        outline: none;
        background-color: inherit;
        cursor: pointer;
    }
    input {
        display: flex;
        outline: none;
        padding-left: 10px;
        border: none;
        background: none;
    }
    h1, h2, h3, h4, h5, h6, p, a, div, span, input, button, textarea {
        letter-spacing: -0.25px;
        font-family: 'Pretendard';
    }
    * {
        font-family: 'Pretendard';
        font-weight: 100;
    }
`;
