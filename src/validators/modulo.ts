import { z } from 'zod';
//direccion de administracion y finanzas
export const CreateModuloSchema = z.object({
    idPlan: z.number().int().positive(),
    clave: z.string().min(1).max(15),
    abreviatura: z.string().min(1).max(30),
    nombre: z.string().min(1).max(100),
    creditos: z.number().int().positive(),
    asignaturas: z.number().int().positive(),
    tipo: z.enum(['Base', 'Especialidad']),
    estado: z.enum(['Elaborado', 'Validado', 'Autorizado', 'Publicado', 'Cancelado']),
});

export const FindOneModuloSchema = z.object({
  idModulo: z.number().int().positive({
    message: 'idModulo debe ser un número entero positivo',
  }),
});

export const UpdateModuloSchema = z.object({
  idModulo: z.number().int().positive({
    message: 'idModulo debe ser un número entero positivo',
  }),
});

export const UpdateModuloBodySchema = z.object({
  idPlan: z.number().int().positive().optional(),
  clave: z.string().min(1).max(15).optional(),
  abreviatura: z.string().min(1).max(30).optional(),
  nombre: z.string().min(1).max(100).optional(),
  creditos: z.number().int().positive().optional(),
  asignaturas: z.number().int().positive().optional(),
  tipo: z.enum(['Base', 'Especialidad']).optional(),
  estado: z.enum(['Elaborado', 'Validado', 'Autorizado', 'Publicado', 'Cancelado']).optional(),
});

export const FindAllModuloSchema = z.object({
    idPlan: z.number().int().positive().optional(),
    clave: z.string().min(1).max(15).optional(),
    abreviatura: z.string().min(1).max(30).optional(),
    nombre: z.string().min(1).max(100).optional(),
    creditos: z.number().int().positive().optional(),
    asignaturas: z.number().int().positive().optional(),
    tipo: z.enum(['Base', 'Especialidad']).optional(),
    estado: z.enum(['Elaborado', 'Validado', 'Autorizado', 'Publicado', 'Cancelado']).optional(),
    page: z.number().int().min(1).optional(),           
    limit: z.number().int().min(1).optional(),          
    sort: z.enum(['asc', 'desc']).optional(),           
});
