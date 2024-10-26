// import { selector } from 'recoil';
// import { LoginRequest } from '../types/loginTypes';
// import { loginState } from '../../recoil/states/Loginstate';

import { LoginRequest } from '../types/loginTypes';

export const fetchLogin = async (loginInfo: LoginRequest) => {
  try {
    const response = await fetch('http://13.125.38.246:3000/EveryGrade/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginInfo),
    });

    if (!response.ok) {
      throw new Error('로그인 실패: 아이디나 비밀번호가 잘못되었습니다.');
    }

    const token = response.headers.get('Authorization');
    const data = await response.json();

    if (token) {
      localStorage.setItem('token', token); // 토큰을 로컬 저장소에 저장하여 새로고침 시 유지
      return { ...data, token };
    }
    return data;
  } catch (error) {
    console.error('로그인 중 오류 발생:', error);
    return null;
  }
};


// export const loginInfoSelector = selector({
//   key: 'loginInfoSelector',
//   get: async ({ get }) => {
//     const loginInfo = get(loginState);
//     try {
//       const response = await fetch('http://13.125.38.246:3000/EveryGrade/user/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(loginInfo),
//       });

//       if (!response.ok) {
//         throw new Error('로그인 실패: 아이디나 비밀번호가 잘못되었습니다.');
//       }
//       console.log(response);
//       const token = response.headers.get('Authorization');
//       // console.log('토큰:', token);
//       const data: LoginRequest = await response.json();

//       if (token) {
//         setLoginInfo({ ...loginInfo, token });
//         localStorage.setItem('token', token); // 새로고침 시 토큰 유지
//       }
//       return data;
//     } catch (error) {
//       console.error('로그인 중 오류 발생:', error);
//       return null;
//     }
//   },
// });