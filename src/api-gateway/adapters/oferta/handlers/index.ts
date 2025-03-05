import { createOfertaHandler } from './create.handlers.oferta.adapter';
import { findAllOfertasHandler } from './findAll.handlers.oferta.adapter';
import { findOneOfertaHandler } from './findOne.handlers.oferta.adapter';
import { updateOfertaHandler } from './update.handlers.oferta.adapter';


export const ofertaHandlers = {
  createOfertaHandler,
  findAllOfertasHandler,
  findOneOfertaHandler,
  updateOfertaHandler,
};
