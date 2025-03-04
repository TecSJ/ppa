import { z } from 'zod';
export const CreateAsignaturaSchema = z.object({
    idModulo: z.number().int().positive(),
    clave: z.string().min(1).max(255),
    nombre: z.string().min(1).max(255),
    creditos: z.number().int().positive(),
    unidades: z.number().int().positive(),
    horasPracticas: z.number().int().positive(),
    horasTeoricas: z.number().int().positive(),
    horasNomina: z.number().int().positive(),
    resumen: z.string().min(1).max(255),
    intencion: z.string().min(1).max(255),
    competencia: z.string().min(1).max(255),
    documento: z.string().min(1).max(255),
    estado: z.enum(['Activo', 'Inactivo'], { message: 'digital debe ser Activo, Inactivo' }),
});

export const FindOneAsignaturaSchema = z.object({
  idAsignatura: z.number().int().positive({
    message: 'idAsignatura debe ser un número entero positivo',
  }),
});

export const UpdateAsignaturaSchema = z.object({
  idAsignatura: z.number().int().positive({
    message: 'idAsignatura debe ser un número entero positivo',
  }),
});

export const UpdateAsignaturaBodySchema = z.object({
    idModulo: z.number().int().positive().optional(),
    clave: z.string().min(1).max(255).optional(),
    nombre: z.string().min(1).max(255).optional(),
    creditos: z.number().int().positive().optional(),
    unidades: z.number().int().positive().optional(),
    horasPracticas: z.number().int().positive().optional(),
    horasTeoricas: z.number().int().positive().optional(),
    horasNomina: z.number().int().positive().optional(),
    resumen: z.string().min(1).max(255).optional(),
    intencion: z.string().min(1).max(255),
    competencia: z.string().min(1).max(255).optional(),
    documento: z.string().min(1).max(255).optional(),
    estado: z.enum(['Activo', 'Inactivo'], { message: 'digital debe ser Activo, Inactivo' }).optional(),
});

export const DeleteAsignaturaSchema = z.object({
  idAsignatura: z.number().int().positive({ 
    message: 'idAsignatura debe ser un número entero positivo',
  }),
});

export const FindAllAsignaturaSchema = z.object({
    idAsignacion: z.number().int().positive().optional(),
    idModulo: z.number().int().positive().optional(),
    clave: z.string().min(1).max(255).optional(),
    nombre: z.string().min(1).max(255).optional(),
    creditos: z.number().int().positive().optional(),
    unidades: z.number().int().positive().optional(),
    horasPracticas: z.number().int().positive().optional(),
    horasTeoricas: z.number().int().positive().optional(),
    horasNomina: z.number().int().positive().optional(),
    resumen: z.string().min(1).max(255).optional(),
    intencion: z.string().min(1).max(255).optional(),
    competencia: z.string().min(1).max(255).optional(),
    documento: z.string().min(1).max(255).optional(),
    estado: z.enum(['Activo', 'Inactivo'], { message: 'digital debe ser Activo, Inactivo' }).optional(),
    page: z.number().int().min(1).optional(),           
    limit: z.number().int().min(1).optional(),          
    sort: z.enum(['asc', 'desc']).optional(),           
});
