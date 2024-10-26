import { atom } from 'recoil';
import { UserRegistrationType } from '../types/userRegistration';

export const userRegistrationState = atom<UserRegistrationType>({
  key: 'userRegistrationState',
  default: {
    name: '',
    id: '',
    password: '',
    confirmPassword: '',
    studentId: '',
    major_type: '', 
    major1: '', 
    major2: undefined, 
    minor: undefined,
  },
});
