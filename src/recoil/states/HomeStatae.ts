import { atom } from 'recoil';
import { TotalGradeCredit } from '../types/Home'; // CourseData 인터페이스의 경로에 맞게 수정하세요.

export const courseState = atom<TotalGradeCredit | null>({
    key: 'courseState', // 이 상태의 고유 키
    default: null, // 초기값을 null로 설정
});