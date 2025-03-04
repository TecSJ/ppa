import { Model, DataTypes, Sequelize } from "sequelize";

const MODULO_TABLE = 'Modulos';

const ModulosSchema = {
    idModulo: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
    },
    idPlan: {
        type: DataTypes.INTEGER,
        field : 'idPlan',
        allowNull: false,
        references: {
        model: 'Planes',
        key: 'idPlan',
        },
    },
    clave: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    abreviatura: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Base',
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    creditos: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    asignaturas: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    tipo: {
        type: DataTypes.ENUM('Base', 'Especialidad'),
        allowNull: false,
        defaultValue: 'Base',
    },
    estado: {
        type: DataTypes.ENUM('Elaborado', 'Validado', 'Autorizado', 'Publicado', 'Cancelado'),
        allowNull: false,
        defaultValue: 'Elaborado',
    },
};

class Modulo extends Model {
    static associate(models:any){
        this.belongsTo(models.Planes, { foreignKey: 'idPlan' ,as: 'Planes' });
    }

    static config(sequelize: Sequelize) {
        return {
        sequelize,
        tableName: MODULO_TABLE,
        modelName: 'Modulos',
        };
    }
}

export { MODULO_TABLE, ModulosSchema, Modulo };