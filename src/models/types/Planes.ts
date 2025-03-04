import { Model, DataTypes, Sequelize } from "sequelize";

const PLANES_TABLE = 'Planes';

const Planeschema = {
    idPlan: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
    },
    idPrograma: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Programas',
            key: 'idPrograma',
        },
    },
    clave: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fechaInicio: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    fechaTermino: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    creditos: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    credMin: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    credMax: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    documento: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    estado: {
        type: DataTypes.ENUM('Elaborado', 'Validado', 'Autorizado', 'Publicado', 'Cancelado'),
        allowNull: false,
        defaultValue: 'Elaborado',
    },
};

class Planes extends Model {
    static associate() {
        // Define associations here if needed
    }

    static config(sequelize: Sequelize) {
        return {
            sequelize,
            tableName: PLANES_TABLE,
            modelName: 'Planes',
            paranoid: true,
            timestamps: true,
        };
    }
}

export { PLANES_TABLE, Planeschema, Planes };
