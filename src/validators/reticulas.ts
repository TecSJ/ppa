import { z } from 'zod';

export const CreateReticulaSchema = z.object({
  idPlan: z.number().int().positive({
    message: 'idPlan debe ser un número entero positivo',
  }),
  idAsignatura: z.number().int().positive({
      message: 'idAsignatura debe ser un número entero positivo',
    }),
  clave: z.string().min(1, { message: 'Clave no puede estar vacía' })
  .max(255, { message: 'Clave no puede exceder 255 caracteres' }),
  esRequerida: z.enum(["S", "N"], {
    message: 'esRequerida no válido',
  }),
  esEvaluada: z.enum(["S", "N"], {
    message: 'esEvaluada no válido',
  }),
  esPromediada: z.enum(["S", "N"], {
    message: 'esPromediada no válido',
  }),
  fila: z.number().int().positive({
    message: 'fila debe ser un número entero positivo',
  }),
  columna: z.number().int().positive({
    message: 'columna debe ser un número entero positivo',
  }),
  documento: z.string()
  .min(1, { message: 'Documento no puede estar vacío' })
  .max(255, { message: 'Documento no puede exceder 255 caracteres' })
  .optional(),
  estado: z.enum(["Elaborado", "Validado", "Autorizado", "Publicado", "Cancelado"], {
    message: 'Estado no válido',
  }),
});

export const FindOneReticulaSchema = z.object({
  idReticula: z.number().int().positive({
    message: 'idReticula debe ser un número entero positivo',
  }),
});
  
export const UpdateReticulaSchema = z.object({
  idReticula: z.number().int().positive({
    message: 'idReticula debe ser un número entero positivo',
  }),
});

export const UpdateReticulaBodySchema = z.object({
  idPlan: z.number().int().positive({
    message: 'idPlan debe ser un número entero positivo',
  }).optional(),
  idAsignatura: z.number().int().positive({
      message: 'idAsignatura debe ser un número entero positivo',
    }).optional(),
  clave: z.string().min(1, { message: 'Clave no puede estar vacía' })
  .max(255, { message: 'Clave no puede exceder 255 caracteres' })
  .optional(),
  esRequerida: z.enum(["S", "N"], {
    message: 'esRequerida no válido',
  }).optional(),
  esEvaluada: z.enum(["S", "N"], {
    message: 'esEvaluada no válido',
  }).optional(),
  esPromediada: z.enum(["S", "N"], {
    message: 'esPromediada no válido',
  }).optional(),
  fila: z.number().int().positive({
    message: 'fila debe ser un número entero positivo',
  }).optional(),
  columna: z.number().int().positive({
    message: 'columna debe ser un número entero positivo',
  }).optional(),
  documento: z.string()
  .min(1, { message: 'Documento no puede estar vacío' })
  .max(255, { message: 'Documento no puede exceder 255 caracteres' })
  .optional(),
  estado: z.enum(["Elaborado", "Validado", "Autorizado", "Publicado", "Cancelado"], {
    message: 'Estado no válido',
  }).optional(),
});

export const DeleteReticulaSchema = z.object({
  idPlan: z.number().int().positive({
    message: 'idPlan debe ser un número entero positivo',
  }),
});

export const FindAllReticulasSchema = z.object({
  clave: z.string().min(1).max(255).optional(),
  page: z.number().int().min(1).optional(),
  limit: z.number().int().min(1).optional(),
  sort: z.enum(['asc', 'desc']).optional(),
});
