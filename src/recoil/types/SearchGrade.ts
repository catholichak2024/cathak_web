//성적조회Api

export interface GradeData {
    id: number;
    subject_name: string;
    str_score: string | null;
    credit: number;
  }
  
// 전체 response 타입
export interface GradeResponse {
    gradeData: GradeData[];
}