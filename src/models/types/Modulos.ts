import { Model, DataTypes, Sequelize, ModelStatic } from "sequelize";

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
    static associate(models: { Planes: ModelStatic<Model> }) {
        this.belongsTo(models.Planes, { foreignKey: 'idPlan' ,as: 'plan' });
    }

    static config(sequelize: Sequelize) {
        return {
        sequelize,
        tableName: MODULO_TABLE,
        modelName: 'Modulos',
        indexes: 
            [
                {
                    unique: true,
                    fields: ['idPlan', 'clave'],
                },
            ],
        };
    }
}

export { MODULO_TABLE, ModulosSchema, Modulo };