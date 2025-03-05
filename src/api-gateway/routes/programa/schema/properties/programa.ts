export const programa = {
    idPrograma: {
        type: 'integer',
        description: 'idPrograma debe ser un integer'
    },
    clave: {
        type: 'string',
        description: 'clave debe ser un string',
        minLength: 1,
        maxLength: 5,
    },
    codigo: {
        type: 'string',
        description: 'codigo debe ser un string',
        minLength: 1,
        maxLength: 6,
    },
    abreviatura: {
        type: 'string',
        description: 'abreviatura debe ser un string',
        minLength: 1,
        maxLength: 30,
    },
    nombre: {
        type: 'string',
        description: 'nombre debe ser un string',
        minLength: 1,
        maxLength: 30,
    },
    certificacion: {
        type: 'string',
        description: 'nombre debe ser un string',
        minLength: 1,
        maxLength: 6,
    },
    modalidad: {
        type: 'string',
        enum: ['Escolarizado','Mixta','A distancia'],
    },
    nivel: {
        type: 'string',
        enum: ['Licenciatura','Ingeniería','Maestría'],
    },
    documento: {
        type: 'string',
        description: 'documento debe ser un string',
        minLength: 1,
        maxLength: 100,
    },
    idPlantel: {
        type: 'string',
        description: 'documento debe ser un string',
        minLength: 1,
        maxLength: 2,
    },
    estado: {
        type: 'string',
        enum: ['Elaborado','Validado','Autorizado','Publicado','Cancelado'],
    },
}