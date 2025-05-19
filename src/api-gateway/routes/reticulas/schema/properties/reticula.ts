export const reticula ={
    idPlan: {
        type: 'integer',
        description: 'idPlan debe ser un integer'
    },
    idAsignatura: {
        type: 'integer',
        description: 'idAsignatura debe ser un integer'
    },
    clave: {
        type: 'string',
        description: 'clave debe ser un string',
        minLength: 1,
        maxLength: 255,
    },
    esRequerida: {
        type: 'string',
        enum: ["S", "N"],
    },
    esEvaluada: {
        type: 'string',
        enum: ["S", "N"],
    },
    esPromediada: {
        type: 'string',
        enum: ["S", "N"],
    },
    fila: {
        type: 'integer',
        description: 'fila debe ser un integer'
    },
    columna: {
        type: 'integer',
        description: 'columna debe ser un integer'
    },
    documento: {
        type: 'string',
        description: 'documento debe ser un string',
    },
    estado: {
        type: 'string', 
        enum: ["Elaborado", "Validado", "Autorizado", "Publicado", "Cancelado"],
    },
}