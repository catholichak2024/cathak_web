import { atom } from 'recoil';
import { LoginRequest } from '../types/loginTypes';
import { recoilPersist } from 'recoil-persist';


const { persistAtom } = recoilPersist({
    key: 'persist-atom-key', // 고유 키 설정(Recoil상태가 localStorage에 저장됩니다)
    storage: localStorage,
  });
  
// Access Token 상태
export const accessTokenState = atom<string | null>({
    key: 'accessToken',
    default: null,
    effects_UNSTABLE: [persistAtom], // 지속성 적용
  });

// Redirect Path 상태
export const redirectPathState = atom<string | null>({
    key: 'redirectPath',
    default: '/',
    effects_UNSTABLE: [persistAtom],
  });

// User 상태
export const userState = atom<LoginRequest | null>({
    key: 'userState',
    default: null,
    effects_UNSTABLE: [persistAtom],
});

  