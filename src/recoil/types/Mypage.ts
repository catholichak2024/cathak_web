export interface UserData {
    name: string;                // 이름
    id: string;                  // 사용자 ID
    major_type: string; // 전공 유형
    major1: string;              // 1전공
    major2?: string;             // 2전공 (optional)
    minor?: string;
}