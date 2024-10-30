import { atom } from 'recoil';
import { PasswordRequest } from '../types/passwordTypes';

export const passwordState = atom<PasswordRequest>({
    key: 'passwordState',
    default: {
      number: '',
      id: ''
    },
});



