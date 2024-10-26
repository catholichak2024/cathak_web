import { authInstance } from "./instance"; 
import axios from 'axios';
import { UserData } from "../recoil/types/Mypage";

export const fetchUserData = async (userId: string): Promise<UserData> => {
    try {
        const response = await authInstance().get<UserData>(`/EveryGrade/mypage`); // API 엔드포인트를 적절히 수정하세요.
        return response.data; // 응답 데이터 반환
    } catch (error) {
        console.error("Failed to fetch user data:", error);
        throw error; // 오류를 호출자에게 전달
    }
};