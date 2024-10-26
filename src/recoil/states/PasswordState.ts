import { atom } from 'recoil';
import { PasswordRequest } from '../types/passwordTypes';

export const userState = atom<PasswordRequest>({
    key: 'passwordState',
    default: {
      number: "202400001",
      id: "catholic1"
    },
});


