export const plan ={
    idPrograma: {
        type: 'integer',
        description: 'idPrograma debe ser un integer'
    },
    clave: {
        type: 'string',
        description: 'clave debe ser un string',
        minLength: 1,
        maxLength: 255,
    },
    fechaInicio: {
        type: 'string',
        format: 'date',
        description: 'fechaInicio debe ser un string',
    },
    fechaTermino: {
        type: 'string',
        format: 'date',
        description: 'fechaTermino debe ser un string',
    },
    creditos: {
        type: 'integer',
        description: 'creditos debe ser un integer'
    },
    credMin: {
        type: 'integer',
        description: 'credMin debe ser un integer'
    },
    credMax: {
        type: 'integer',
        description: 'credMax debe ser un integer'
    },
    documento: {
        type: 'string',
        description: 'documento debe ser un string',
    },
    version: {
        type: 'integer',
        description: 'version debe ser un integer'
    },
    estado: {
        type: 'string', 
        enum: ["Elaborado", "Validado", "Autorizado", "Publicado", "Cancelado"],
    },
}