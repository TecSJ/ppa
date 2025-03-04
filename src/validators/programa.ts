import { z } from 'zod';

export const FindAllProgramaSchema = z.object({
    idPrograma: z.number().int().positive().optional(),
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
