const express       = require('express');
const OngController      = require('./controllers/OngController.js');
const IncidentController = require('./controllers/IncidentController.js');
const ProfileController = require('./controllers/ProfileController.js');
const SessionController = require('./controllers/SessionController.js');

/** Métodos HTTP
 * 
 * GET:     Buscar um informação
 * POST:    Criar uma informação
 * PUT:     Alterar uma informação
 * DELETE:  Deletar uma informação
 */

 /** Tipos de Parâmetros
  * 
  * Query Params: Nomeados e enviados na rota após "?" (filtros, paginação, etc.)
  * Route Params: Utilizados para identificar recursos após ":" (não se pode enviar a mais do que o esperado)
  * Body  Params: Utilizado para criar e/ou alterar recursos
  */

const routes  = express.Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);

routes.post('/sessions', SessionController.create);

module.exports = routes;