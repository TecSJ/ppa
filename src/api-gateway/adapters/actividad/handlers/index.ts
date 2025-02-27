import { createActividadHandler } from './create.handlers.actividad.adapter';
import { deleteActividadHandler } from './delete.handlers.actividad.adapter';
import { findAllActividadHandler } from './findAll.handlers.actividad.adapter';
import { findOneActividadHandler } from './findOnel.handlers.actividad.adapter';
import { updateActividadHandler } from './update.handlers.actividad.adapter';


export const actividadHandlers = {
  createActividadHandler,
  deleteActividadHandler,
  findAllActividadHandler,
  findOneActividadHandler,
  updateActividadHandler,
};
