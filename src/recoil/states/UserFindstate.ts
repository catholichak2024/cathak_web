import { atom } from 'recoil';
import { UserFindRequest } from '../types/userfindTypes';

export const userState = atom<UserFindRequest>({
    key: 'userFindState',
    default: {
      name: "이름",
      number: "202400001"
    },
});



