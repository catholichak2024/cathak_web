import { authInstance } from "./instance";
import axios from 'axios';
import { GradeResponse } from '../recoil/types/SearchGrade';

// 성적 조회 API 함수
export const fetchGradeData = async (): Promise<GradeResponse> => {
  try {
    const response = await authInstance().get<GradeResponse>('/EveryGrade/grade');
    const { status, data } = response;

    if (status === 200) {
      return data;
    } else {
      throw new Error(`Unexpected response status: ${status}`);
    }
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      throw new Error(`Axios error: ${err.message}`);
    } else {
      throw new Error('성적 조회 중 오류 발생');
    }
  }
};