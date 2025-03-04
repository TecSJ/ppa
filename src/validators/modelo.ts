import { z } from 'zod';
export const CreateModeloSchema = z.object({
    idPlan: z.number().int().positive(),
    clave: z.string().min(1).max(15),
    nombre: z.string().min(1).max(100),
});

export const FindOneModeloSchema = z.object({
  idModelo: z.number().int().positive({
    message: 'idModelo debe ser un número entero positivo',
  }),
});

export const UpdateModeloSchema = z.object({
  idModelo: z.number().int().positive({
    message: 'idModelo debe ser un número entero positivo',
  }),
});

export const UpdateModeloBodySchema = z.object({
    idPlan: z.number().int().positive().optional(),
    clave: z.string().min(1).max(255).optional(),
    abreviatura: z.string().min(1).max(255).optional(),
    nombre: z.string().min(1).max(255).optional(),
    creditos: z.number().int().positive().optional(),
    asignaturas: z.number().int().positive().optional(),
    tipo: z.enum(['Base', 'Especialidad']).optional(),
    estado: z.enum(['Elaborado', 'Validado', 'Autorizado', 'Publicado', 'Cancelado']).optional(),
});

export const DeleteModeloSchema = z.object({
  idModelo: z.number().int().positive({ 
    message: 'idModelo debe ser un número entero positivo',
  }),
});

export const FindAllModeloSchema = z.object({
    idModelo: z.number().int().positive().optional(),
    idPlan: z.number().int().positive().optional(),
    clave: z.string().min(1).max(255).optional(),
    abreviatura: z.string().min(1).max(255).optional(),
    nombre: z.string().min(1).max(255).optional(),
    creditos: z.number().int().positive().optional(),
    asignaturas: z.number().int().positive().optional(),
    tipo: z.enum(['Base', 'Especialidad']).optional(),
    estado: z.enum(['Elaborado', 'Validado', 'Autorizado', 'Publicado', 'Cancelado']).optional(),
    page: z.number().int().min(1).optional(),           
    limit: z.number().int().min(1).optional(),          
    sort: z.enum(['asc', 'desc']).optional(),           
});
