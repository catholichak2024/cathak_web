import { selector } from 'recoil';
import { LoginRequest } from '../types/loginTypes';
import { loginState } from '../../recoil/states/Loginstate';

export const loginInfoSelector = selector({
  key: 'loginInfoSelector',
  get: async ({ get }) => {
    const loginInfo = get(loginState);
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

      const data: LoginRequest = await response.json();
      return data;
    } catch (error) {
      console.error('로그인 중 오류 발생:', error);
      return null;
    }
  },
});