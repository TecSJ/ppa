import { Model, DataTypes, Sequelize } from "sequelize";

const COMPETENCIA_TABLE = 'Competencias';

const CompetenciasSchema = {
  idCompetencia: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  estado: {
    type: DataTypes.ENUM('Activo', 'Inactivo'),
    allowNull: false,
    defaultValue: 'Activo',
  },
  clave:{
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
};

class Competencia extends Model {
  static config(sequelize: Sequelize) {
    return {
    sequelize,
    tableName: COMPETENCIA_TABLE,
    modelName: 'Competencias',
    };
  }
}

export { COMPETENCIA_TABLE, CompetenciasSchema, Competencia };
