import { atom } from 'recoil';
import { MajorChangeRequest } from '../types/majorChangeTypes';

export const MajorChangeState = atom<MajorChangeRequest>({
    key: 'majorchangeState',
    default: {
      major_type: '',
      major1: '',
      major2: undefined,
      minor: undefined, 
    },
});



