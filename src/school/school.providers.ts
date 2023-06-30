import { School } from './school.entity';

export const SchoolProviders = [
  {
    provide: 'SCHOOL_REPOSITORY',
    useValue: School,
  },
];