import { authInstance } from "./instance";
import axios from 'axios';
import { CourseData } from "../recoil/types/Generael/other";

// 타계열성적 조회 API 함수
export const fetchTaGradeData = async (): Promise<CourseData> => {
    try {
        const response = await authInstance().get<CourseData>('/EveryGrade/spec/my-major'); // '/api/grades'는 API의 엔드포인트입니다.
        return response.data; // 응답 데이터 반환
    } catch (error) {
        // 오류 처리
        console.error("Error fetching grade data:", error);
        throw error; // 오류를 다시 던져서 호출한 곳에서 처리할 수 있도록 함
    }
};