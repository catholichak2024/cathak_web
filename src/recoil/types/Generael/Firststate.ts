import { atom } from 'recoil';
import { CourseData } from './First';  // 경로는 실제 파일 위치에 맞게 수정

export const courseDataState = atom<CourseData>({
    key: 'courseDataState', // 상태의 고유 키
    default: {
        minimum: "0",
        received: "0",
        content: [],  // 초기에는 빈 배열
        subject: [],  // 초기에는 빈 배열
    },
});