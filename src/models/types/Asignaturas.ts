import { Model, DataTypes, Sequelize } from "sequelize";

const ASIGNATURA_TABLE = 'Asignaturas';

const AsignaturasSchema = {
    idAsignatura: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
    },
    idModulo: {
        type: DataTypes.INTEGER,
        field : 'idModulo',
        allowNull: false,
        references: {
        model: 'Modulos',
        key: 'idModulo',
        },
    },
    clave: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    abreviatura: {
        type: DataTypes.STRING,
        allowNull: false,
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
    unidades: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    horasPracticas: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    horasTeoricas: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    horasNomina: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    resumen: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    intencion: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    competencia: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    documento: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    estado: {
        type: DataTypes.ENUM('Activo', 'Inactivo'),
        allowNull: false,
        defaultValue: 'Activo',
    },
};

class Asignatura extends Model {
    static associate(models:any){
        //this.belongsTo(models.Modulos, { foreignKey: 'idModulos' ,as: 'Modulo' });
    }

    static config(sequelize: Sequelize) {
        return {
        sequelize,
        tableName: ASIGNATURA_TABLE,
        modelName: 'Asignatura',
        };
    }
}

export { ASIGNATURA_TABLE, AsignaturasSchema, Asignatura };