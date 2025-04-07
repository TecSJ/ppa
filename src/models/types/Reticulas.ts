import { Model, DataTypes, Sequelize } from "sequelize";

const RETICULA_TABLE = 'Reticulas';

const ReticulasSchema = {
    idReticula: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
    },
    idPlan: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Planes',
            key: 'idPlan',
        },
        field: 'idPlan',
    },
    idAsignatura: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Asignatura',
            key: 'idAsignatura',
        },
        field: 'idAsignatura',
    },
    clave: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    esRequerida: {
        type: DataTypes.ENUM('S', 'N'),
        allowNull: false,
    },
    esEvaluada: {
        type: DataTypes.ENUM('S', 'N'),
        allowNull: false,
    },
    esPromediada: {
        type: DataTypes.ENUM('S', 'N'),
        allowNull: false,
    },
    fila: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 1,
    },
    columna: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 1,
    },
    documento: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    estado: {
        type: DataTypes.ENUM('Elaborado', 'Validado', 'Autorizado', 'Publicado', 'Cancelado'),
        allowNull: false,
        defaultValue: 'Elaborado',
    },
};

class Reticulas extends Model {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static associate(models:any) {
        this.belongsTo(models.Planes, { foreignKey: 'idPlan', as: 'planes' });
        this.belongsTo(models.Asignatura, { foreignKey: 'idAsignatura', as: 'asignatura' });
    }

    static config(sequelize: Sequelize) {
        return {
            sequelize,
            tableName: RETICULA_TABLE,
            modelName: 'Reticulas',
        };
    }
}

export { RETICULA_TABLE, ReticulasSchema, Reticulas };
