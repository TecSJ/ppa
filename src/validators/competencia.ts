import { z } from 'zod';
//direccion de administracion y finanzas
export const CreateCompetenciaSchema = z.object({
    descripcion: z.string().min(1).max(255),
    estado: z.enum(['Activo', 'Inactivo'], { message: 'digital debe ser Activo, Inactivo' }),
});

export const FindOneCompetenciaSchema = z.object({
  idCompetencia: z.number().int().positive({
    message: 'idCompetencia debe ser un número entero positivo',
  }),
});

export const UpdateCompetenciaSchema = z.object({
  idCompetencia: z.number().int().positive({
    message: 'idCompetencia debe ser un número entero positivo',
  }),
});

export const UpdateCompetenciaBodySchema = z.object({
  descripcion: z.string().min(1).max(255),
  estado: z.enum(['Activo', 'Inactivo'], { message: 'digital debe ser Activo, Inactivo' }).optional(),
});

export const DeleteCompetenciaSchema = z.object({
  idCompetencia: z.number().int().positive({ 
    message: 'idCompetencia debe ser un número entero positivo',
  }),
});

export const FindAllCompetenciaSchema = z.object({
    idCompetencia: z.number().int().positive().optional(),
    descripcion: z.string().min(1).max(255),
    estado: z.enum(['Activo', 'Inactivo'], { message: 'digital debe ser Activo, Inactivo' }).optional(),
    page: z.number().int().min(1).optional(),           
    limit: z.number().int().min(1).optional(),          
    sort: z.enum(['asc', 'desc']).optional(),           
});
