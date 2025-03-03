export const competencia ={
    descripcion: {
        type: 'string',
        description: 'nombre debe ser un string',
        minLength: 1,
        maxLength: 255,
    },
    estado: {
        type: "string", 
        enum: ["Activo", "Inactivo"]
    },
    clave: {
        type: 'string',
        description: 'clave debe ser un string',
        minLength: 1,
        maxLength: 10,
    },
}