import { atom } from 'recoil';
import { MajorChangeRequest } from '../types/majorChangeTypes';

export const MajorChangeState = atom<MajorChangeRequest>({
    key: 'majorchangeState',
    default: {
      major_type: "복수전공",
      major1: "컴퓨터정보공학부",
      major2: "정보통신전자공학부",
      minor: "" 
    },
});



