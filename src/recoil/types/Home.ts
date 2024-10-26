export interface TotalGradeCredit {
    message: string;
    data: {
      culturalCourses: string;  // 교양 과목 수
      majorFoundationCourses: number;  // 전공 기초 과목 수
      majorCourses: string;  // 전공 과목 수
      totalCredits: number;  // 총 학점
      totalGPA: string;  // 총 GPA
      majorGPA: string;  // 전공 GPA
    };
  }