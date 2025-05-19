import { z } from 'zod';

export const CreateProgramaSchema = z.object({
    clave: z.string().min(1).max(5),
    codigo: z.string().min(1).max(6),
    abreviatura: z.string().min(1).max(30),
    nombre: z.string().min(1).max(100),
    certificacion: z.string().min(1).max(6),
    modalidad: z.enum(['Escolarizado','Mixta','A distancia']),
    nivel: z.enum(['Licenciatura','Ingeniería','Maestría']),
    documento: z.string().min(1).max(100),
    idPlantel: z.string().min(1).max(2),
});

export const findOneProgramaSchema = z.object({
    idPrograma: z.number().int().positive({
        message: 'idPrograma debe ser un número entero positivo'
    })
});

export const FindAllProgramaSchema = z.object({
    idPrograma: z.number().int().optional(),
    clave: z.string().min(1).max(5).optional(),
    codigo: z.string().min(1).max(6).optional(),
    abreviatura: z.string().min(1).max(30).optional(),
    nombre: z.string().min(1).max(100).optional(),
    certificacion: z.string().min(1).max(6).optional(),
    modalidad: z.enum(['Escolarizado','Mixta','A distancia']).optional(),
    nivel: z.enum(['Licenciatura','Ingeniería','Maestría']).optional(),
    idPlantel: z.string().min(1).max(2).optional(),
    estado: z.enum(['Elaborado','Validado','Autorizado','Publicado','Cancelado']).optional(),
});

export const updateProgramaSchema = z.object({
    idPrograma: z.number().int().positive({
        message: 'idPrograma debe ser un numero entero positivo'
    })
})

export const updateBodyProgramaSchema = z.object({
    idPrograma: z.number().int({
        message: 'idPrograma debe ser un numero entero positivo'
    }).optional(),
    clave: z.string().min(1).max(5).optional(),
    codigo: z.string().min(1).max(6).optional(),
    abreviatura: z.string().min(1).max(30).optional(),
    nombre: z.string().min(1).max(100).optional(),
    certificacion: z.string().min(1).max(6).optional(),
    modalidad: z.enum(['Escolarizado','Mixta','A distancia']).optional(),
    nivel: z.enum(['Licenciatura','Ingeniería','Maestría']).optional(),
    documento: z.string().min(1).max(100).optional(),
    idPlantel: z.string().min(1).max(2).optional(),
    estado: z.enum(['Elaborado','Validado','Autorizado','Publicado','Cancelado']).optional(),
});