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
  },
});
