import { Model, DataTypes, Sequelize } from 'sequelize';

const PROGRAMA_TABLE = 'Programas';

const ProgramasSchema = {
    idPrograma: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
    },
    clave: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 0,
    },
    codigo: {
        type: DataTypes.STRING,
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
        type: DataTypes.STRING,
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
            tableName: PROGRAMA_TABLE,
            modelName: 'Programas'
        }
    }
}

export { PROGRAMA_TABLE, ProgramasSchema, Programa } 