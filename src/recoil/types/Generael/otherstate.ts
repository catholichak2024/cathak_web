import { atom } from 'recoil';
import { CourseData } from './other'; // 경로는 파일 위치에 맞게 조정

// CourseData 타입의 전역 상태 생성
export const courseDataState = atom<CourseData>({
    key: 'courseDataState', // 고유 키
    default: {
        minimum: "0",
        received: "0",
        content: [],        // 초기 값으로 빈 MajorContent 배열
        subject: [],        // 초기 값으로 빈 Subject 배열
    },
});