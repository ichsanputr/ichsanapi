import { Student } from './student.entity';

export const StudentProviders = [
  {
    provide: 'STUDENT_REPOSITORY',
    useValue: Student,
  },
];