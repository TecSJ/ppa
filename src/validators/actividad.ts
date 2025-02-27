import { z } from 'zod';

export const CreateActividadSchema = z.object({
  nombre: z.string().min(1).max(300),
});

export const FindOneActividadSchema = z.object({
  idActividad: z.number().int().positive({
    message: 'idActividad debe ser un número entero positivo',
  }),
});

export const UpdateActividadSchema = z.object({
  idActividad: z.number().int().positive({
    message: 'idActividad debe ser un número entero positivo',
  }),
});

export const UpdateActividadBodySchema = z.object({
  nombre: z.string().min(1).max(300).optional(),
});

export const DeleteActividadSchema = z.object({
  idActividad: z.number().int().positive({ 
    message: 'idActividad debe ser un número entero positivo',
  }),
});

export const FindAllActividadSchema = z.object({
    nombre: z.string().min(1).max(300).optional(),
    page: z.number().int().min(1).optional(),           
    limit: z.number().int().min(1).optional(),          
    sort: z.enum(['asc', 'desc']).optional(),           
});
