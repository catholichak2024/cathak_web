import { authInstance } from "./instance"; 
import axios from 'axios';
import { TotalGradeCredit } from "../recoil/types/Home";

export const fetchTotalGradeCredit = async (): Promise<TotalGradeCredit> => {
    try {
      const response = await authInstance().get<TotalGradeCredit>('/EveryGrade/grade'); // API 호출
      const { status, data } = response; // 응답에서 상태와 데이터를 구조 분해 할당
  
      if (status === 200) {
        return data; // 상태가 200일 경우 데이터를 반환
      } else {
        throw new Error(`Unexpected response status: ${status}`); // 그 외의 경우 오류 발생
      }
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        throw new Error(`Axios error: ${err.message}`); // Axios 오류 처리
      } else {
        throw new Error('총 성적 및 학점 조회 중 오류 발생'); // 일반 오류 처리
      }
    }
  };