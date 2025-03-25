import { z } from 'zod';

export const CreatePlanSchema = z.object({
  idPrograma: z.number().int().positive({
    message: 'idPrograma debe ser un número entero positivo',
  }),
  clave: z.string().min(1, { message: 'Clave no puede estar vacía' })
  .max(255, { message: 'Clave no puede exceder 255 caracteres' }),
  fechaInicio: z.string().date(),
  fechaTermino: z.string().date(),
  creditos: z.number().int().positive({
    message: 'Créditos debe ser un número entero positivo',
  }),
  credMin: z.number().int().positive({
    message: 'credMin debe ser un número entero positivo',
  }),
  credMax: z.number().int().positive({
    message: 'credMax debe ser un número entero positivo',
  }),
  documento: z.string()
  .min(1, { message: 'Documento no puede estar vacío' })
  .max(255, { message: 'Documento no puede exceder 255 caracteres' })
  .optional(),
  version: z.number().int().positive({
    message: 'Versión debe ser un número entero positivo',
  }),
  estado: z.enum(["Elaborado", "Validado", "Autorizado", "Publicado", "Cancelado"], {
    message: 'Estado no válido',
  }),
});

export const FindOnePlanSchema = z.object({
  idPlan: z.number().int().positive({
    message: 'idPlan debe ser un número entero positivo',
  }),
});

export const UpdatePlanSchema = z.object({
  idPlan: z.number().int().positive({
    message: 'idPlan debe ser un número entero positivo',
  }),
});

export const UpdatePlanBodySchema = z.object({
  idPrograma: z.number().int().positive({
    message: 'idPrograma debe ser un número entero positivo',
  }).optional(),
  clave: z.string().min(1, { message: 'Clave no puede estar vacía' })
  .max(255, { message: 'Clave no puede exceder 255 caracteres' }).optional(),
  fechaInicio: z.string().date().optional(),
  fechaTermino: z.string().date().optional(),
  creditos: z.number().int().positive({
    message: 'Créditos debe ser un número entero positivo',
  }).optional(),
  credMin: z.number().int().positive({
    message: 'credMin debe ser un número entero positivo',
  }).optional(),
  credMax: z.number().int().positive({
    message: 'credMax debe ser un número entero positivo',
  }).optional(),
  documento: z.string()
  .min(1, { message: 'Documento no puede estar vacío' })
  .max(255, { message: 'Documento no puede exceder 255 caracteres' })
  .optional(),
  version: z.number().int().positive({
    message: 'Versión debe ser un número entero positivo',
  }).optional(),
  estado: z.enum(["Elaborado", "Validado", "Autorizado", "Publicado", "Cancelado"], {
    message: 'Estado no válido',
  }).optional(),
});

export const DeletePlanSchema = z.object({
  idPlan: z.number().int().positive({
    message: 'idPlan debe ser un número entero positivo',
  }),
});

export const FindAllPlanSchema = z.object({
  clave: z.string().min(1).max(255).optional(),
  page: z.number().int().min(1).optional(),
  limit: z.number().int().min(1).optional(),
  sort: z.enum(['asc', 'desc']).optional(),
});
