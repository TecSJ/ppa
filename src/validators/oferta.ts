import { z } from 'zod';

// Esquema para crear una oferta
export const CreateOfertaSchema = z.object({
  idPrograma: z.number().int().positive({
    message: 'idPrograma debe ser un número entero positivo',
  }),
  turno: z.enum(['Matutino', 'Vespertino', 'Mixto']).default('Matutino'),
  espacios: z.number().int().min(1).max(255).default(40),
  idPeriodo: z.string().length(5, {
    message: 'idPeriodo debe tener exactamente 5 caracteres',
  }).default('2025B'),
  estado: z.enum(['Elaborado', 'Validado', 'Autorizado', 'Publicado', 'Cancelado']).default('Elaborado'),
});

// Esquema para buscar una oferta por su ID
export const FindOneOfertaSchema = z.object({
  idOferta: z.number().int().positive({
    message: 'idOferta debe ser un número entero positivo',
  }),
});

// Esquema para actualizar una oferta (parámetro de ruta)
export const UpdateOfertaSchema = z.object({
  idOferta: z.number().int().positive({
    message: 'idOferta debe ser un número entero positivo',
  }),
});

// Esquema para actualizar el cuerpo de una oferta
export const UpdateOfertaBodySchema = z.object({
  idPrograma: z.number().int().positive({
    message: 'idPrograma debe ser un número entero positivo',
  }).optional(),
  turno: z.enum(['Matutino', 'Vespertino', 'Mixto']).optional(),
  espacios: z.number().int().min(1).max(255).optional(),
  idPeriodo: z.string().length(5, {
    message: 'idPeriodo debe tener exactamente 5 caracteres',
  }).optional(),
  estado: z.enum(['Elaborado', 'Validado', 'Autorizado', 'Publicado', 'Cancelado']).optional(),
});

// Esquema para eliminar una oferta
export const DeleteOfertaSchema = z.object({
  idOferta: z.number().int().positive({
    message: 'idOferta debe ser un número entero positivo',
  }),
});

// Esquema para buscar todas las ofertas (con paginación y filtros)
export const FindAllOfertaSchema = z.object({
  idPrograma: z.number().int().positive({
    message: 'idPrograma debe ser un número entero positivo',
  }).optional(),
  turno: z.enum(['Matutino', 'Vespertino', 'Mixto']).optional(),
  espacios: z.number().int().min(1).max(255).optional(),
  idPeriodo: z.string().length(5, {
    message: 'idPeriodo debe tener exactamente 5 caracteres',
  }).optional(),
  estado: z.enum(['Elaborado', 'Validado', 'Autorizado', 'Publicado', 'Cancelado']).optional(),
  page: z.number().int().min(1).optional(),
  limit: z.number().int().min(1).optional(),
  sort: z.enum(['asc', 'desc']).optional(),
});