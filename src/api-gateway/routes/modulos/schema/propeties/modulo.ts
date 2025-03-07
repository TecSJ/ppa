export const modulo={
    idPlan: {
        type: 'integer',
        description: 'idPlan debe ser un integer'
    },
    clave: {
        type: 'string',
        description: 'clave debe ser un string',
        minLength: 1,
        maxLength: 15,
    },
    abreviatura: {
        type: 'string',
        description: 'clave debe ser un string',
        minLength: 1,
        maxLength: 30,
    },
    nombre: {
        type: 'string',
        description: 'nombre debe ser un string',
        minLength: 1,
        maxLength: 100,
    },
    creditos: {
        type: 'integer',
        description: 'creditos debe ser un integer'
    },
    asignaturas: {
        type: 'integer',
        description: 'unidades debe ser un integer'
    },
    tipo: {
        type: "string", 
        enum: ["Base", "Especialidad"]
    },
    estado: {
        type: "string", 
        enum: ["Elaborado", "Validado", "Autorizado", "Publicado", "Cancelado"]
    },
}