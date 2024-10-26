import { atom } from 'recoil';
import { GradeResponse } from '../types/SearchGrade';


export const gradeState = atom<GradeResponse>({
    key: 'gradeState',
    default: {
      gradeData: [], // 초기값을 빈 배열로 설정
    },
  });