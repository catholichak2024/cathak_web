//학번별 교양학점정보
export interface creditByIdInfo {
    studentYear: number; // 학번 앞 두 자리
    basicGeneralCredit: number; // 기초교양 필수 학점
    coreGeneralCredit: number; // 중핵교양 필수 학점
    freeGeneralCredit: number; // 자유교양 필수 학점
  }