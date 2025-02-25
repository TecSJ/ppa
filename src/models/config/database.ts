import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import { setupModels } from '../types';

dotenv.config();

let sequelize;

if (process.env.NODE_ENV === 'test') {
  sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: ':memory:',
    logging: false,
    define: {
      timestamps: false,
    },
  });
} else {
  sequelize = new Sequelize({
    dialect: 'mysql',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    logging: process.env.NODE_ENV !== 'development',
    define: {
      timestamps: false,
    },
  });
}

setupModels(sequelize);
sequelize.sync({ force: false });

export default sequelize;
