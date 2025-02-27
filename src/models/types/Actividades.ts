import { Model, DataTypes, Sequelize } from "sequelize";

const ACTIVIDAD_TABLE = 'Actividades';

const ActividadesSchema = {
  idActividad: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
};

class Actividad extends Model {
  static config(sequelize: Sequelize) {
    return {
    sequelize,
    tableName: ACTIVIDAD_TABLE,
    modelName: 'Actividades',
    };
  }
}

export { ACTIVIDAD_TABLE, ActividadesSchema, Actividad };
