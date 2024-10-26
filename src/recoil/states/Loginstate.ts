import { atom } from 'recoil';
import { LoginRequest } from '../types/loginTypes';

export const loginState = atom<LoginRequest>({
    key: 'userInfoState',
    default: {
        id: "아이디",
        pw: "비밀번호"
    },
});



