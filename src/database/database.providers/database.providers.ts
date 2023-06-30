
import { Sequelize } from 'sequelize-typescript';
import { Student } from '../../student/student.entity';
import { Class } from 'src/class/class.entity';
import { School } from 'src/school/school.entity';
import { User } from 'src/user/user.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: process.env.DATABASE_HOST,
        port: 4000,
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASS,
        database: process.env.DATABASE_NAME,
        define: {
          timestamps: false
        },
        dialectOptions: {
          ssl: {
            rejectUnauthorized: true
          }
        }
      });

      sequelize.addModels([Student, Class, School, User]);

      await sequelize.sync();
      return sequelize;
    },
  },
];