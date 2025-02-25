import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import { setupModels } from '../types'; // Importa el setup de modelos

dotenv.config();

const sequelize = new Sequelize({
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

sequelize.sync({ force: false })
setupModels(sequelize);

export default sequelize;
