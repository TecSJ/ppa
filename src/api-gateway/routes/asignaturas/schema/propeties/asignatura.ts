export const asignatura={
    idModulo: {
        type: 'integer',
        description: 'idModulo debe ser un integer'
    },
    clave: {
        type: 'string',
        description: 'clave debe ser un string',
        minLength: 1,
        maxLength: 255,
    },
    nombre: {
        type: 'string',
        description: 'nombre debe ser un string',
        minLength: 1,
        maxLength: 255,
    },
    creditos: {
        type: 'integer',
        description: 'creditos debe ser un integer'
    },
    unidades: {
        type: 'integer',
        description: 'unidades debe ser un integer'
    },
    horasPracticas: {
        type: 'integer',
        description: 'horasPracticas debe ser un integer'
    },
    horasTeoricas: {
        type: 'integer',
        description: 'horasTeoricass debe ser un integer'
    },
    horasNomina: {
        type: 'integer',
        description: 'horasNomina debe ser un integer'
    },
    resumen: {
        type: 'string',
        description: 'resumen debe ser un string',
        minLength: 1,
        maxLength: 255,
    },
    intencion: {
        type: 'string',
        description: 'intencion debe ser un string',
        minLength: 1,
        maxLength: 255,
    },
    competencia: {
        type: 'string',
        description: 'competencia debe ser un string',
        minLength: 1,
        maxLength: 255,
    },
    documento: {
        type: 'string',
        description: 'documento debe ser un string',
        minLength: 1,
        maxLength: 255,
    },
    estado: {
        type: "string", 
        enum: ["Activo", "Inactivo"]
    },
}