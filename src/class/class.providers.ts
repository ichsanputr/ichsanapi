import { Class } from './class.entity';

export const ClassProviders = [
  {
    provide: 'CLASS_REPOSITORY',
    useValue: Class,
  },
];