//api generalPage.ts
export interface Subject {
    credit: number;
    name: string;
    bookmark: number;
  }
  
export interface CourseData {
    minimum: number;
    received: string;
    content: string;
    subject: Subject[];
  }