import { Model, DataTypes, Sequelize } from 'sequelize';

const CONOCIMIENTO_TABLE = 'Conocimientos';

const ConocimientosSchema = {
  idConocimiento: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
  },
  idActividad: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'idActividad',
    references: {
      model: 'Actividades',
      key: 'idActividad',
    },
  },
  idUnidad: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'idUnidad',
    references: {
      model: 'Unidades',
      key: 'idUnidad',
    },
  },
};

class Conocimiento extends Model {
  static associate(models: any) {
    this.belongsTo(models.Actividades, { foreignKey: 'idActividad', as: 'Actividad' });
    this.belongsTo(models.Unidades, { foreignKey: 'idUnidad', as: 'Unidad' });
  }

  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: CONOCIMIENTO_TABLE,
      modelName: 'Categorias',
      /* Indexes nos permite generar reglas en la base de datos
      esto funciona principalemnte para evitar duplicidades en valores
      en este caso se esta empleando un index el cual impide que exista un id conocimiento con idActividad y idUnidad duplicados
      indexes: [
        {
          unique: true,
          fields: ['idActividad', 'idUnidad'],
        },
      ],*/
    };
  }
}

export { CONOCIMIENTO_TABLE, ConocimientosSchema, Conocimiento };
