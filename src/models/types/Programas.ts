import { Model, DataTypes, Sequelize } from 'sequelize';

const PROGRAMAS_TABLE = 'Programas';

const ProgramasSchema = {
    idPrograma: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
    },
    clave: {
        type: DataTypes.CHAR(5),
        allowNull: false,
        defaultValue: 0,
    },
    codigo: {
        type: DataTypes.CHAR(6),
        allowNull: false,
        defaultValue: 0,
    },
    abreviatura: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    certificacion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    modalidad: {
        type: DataTypes.ENUM('Escolarizado','Mixta','A distancia'),
        allowNull: true,
        defaultValue: 'Escolarizado',
    },
    nivel: {
        type: DataTypes.ENUM('Licenciatura','Ingeniería','Maestría'),
        allowNull: false,
        defaultValue: 'Licenciatura',
    },
    documento: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    idPlantel: {
        type: DataTypes.CHAR(2),
        allowNull: false,
    },
    estado: {
        type: DataTypes.ENUM('Elaborado','Validado','Autorizado','Publicado','Cancelado'), 
        allowNull: false,
        defaultValue: 'Elaborado',
    }
}

class Programa extends Model {
    static config(sequelize: Sequelize){
        return {
            sequelize,
            tableName: PROGRAMAS_TABLE,
            modelName: 'Programas'
        }
    }
}

export { PROGRAMAS_TABLE, ProgramasSchema, Programa } 