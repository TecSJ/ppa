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

setupModels(sequelize);
sequelize.sync({ force: false })

export default sequelize;
