import { Model, DataTypes, Sequelize } from "sequelize";

const OFERTAS_TABLE = 'Ofertas';

const OfertasSchema = {
  idOferta: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true
  },
  idPrograma: {
    type: DataTypes.INTEGER,
    field : 'idPrograma',
    allowNull: false,
    references: {
      model: 'Programas',
      key: 'idPrograma',
    }
  },
  turno: {
    type: DataTypes.ENUM('Matutino', 'Vespertino','Mixto'),
    allowNull: false,
    defaultValue: 'Matutino',
  },
  espacios: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 40
  },
  idPeriodo: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '2025B'
  },
  estado: {
    type: DataTypes.ENUM('Elaborado', 'Validado','Autorizado','Publicado','Cancelado'),
    allowNull: false,
    defaultValue: 'Elaborado',
  },
};

class Oferta extends Model {
  static associate(models: any) {
    this.belongsTo(models.Programas, { foreignKey: 'idPrograma', as: 'Programas' });
  }
  static config(sequelize: Sequelize) {
    return {
    sequelize,
    tableName: OFERTAS_TABLE,
    modelName: 'Ofertas',
    };
  }
}

export { OFERTAS_TABLE, OfertasSchema, Oferta };
