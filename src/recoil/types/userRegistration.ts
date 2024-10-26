export interface UserRegistrationType {
    name: string;
    id: string;
    password: string;
    confirmPassword: string;
    studentId: string;
    major_type:string;
    major1:string|null;
    major2?: string| null;  
    minor?: string| null;
  }