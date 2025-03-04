export const oferta = {
    idOferta: {
        type: 'integer',
        description: 'Identificador único de la oferta',
        minimum: 1,
    },
    idPrograma: {
        type: 'integer',
        description: 'Identificador del programa asociado a la oferta',
        minimum: 1,
    },
    turno: {
        type: 'string',
        description: 'Turno en el que se ofrece el programa',
        enum: ['Matutino', 'Vespertino', 'Mixto'],
        default: 'Matutino',
    },
    espacios: {
        type: 'integer',
        description: 'Número de espacios disponibles en la oferta',
        minimum: 1,
        maximum: 255,
        default: 40,
    },
    idPeriodo: {
        type: 'string',
        description: 'Identificador del periodo académico',
        minLength: 5,
        maxLength: 5,
        default: '2025B',
    },
    estado: {
        type: 'string',
        description: 'Estado actual de la oferta',
        enum: ['Elaborado', 'Validado', 'Autorizado', 'Publicado', 'Cancelado'],
        default: 'Elaborado',
    },
};