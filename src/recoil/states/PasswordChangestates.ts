import { atom } from 'recoil';
import { PasswordChangeRequest } from '../types/passwordChangeTypes';

export const passwordChangeState = atom<PasswordChangeRequest>({
    key: "passwordChangeState",
    default: {
      pw: "변경할 비밀번호"
    },
});



