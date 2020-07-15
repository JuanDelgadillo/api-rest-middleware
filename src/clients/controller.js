const { ok, notFound } = require('../httpResponses');
const clientsService = require('./service');


const getClients = async (req, res) => {
  let clients = await clientsService.getClientsWithPolicies(req);

  return ok(res, clients);
};

const getClientById = async (req, res) => {
  const { id = '' } = req.params;

  if (!id) {
    return badRequest(res, { 
      message: 'request should have mandatory parameter "id"'
    });
  }

  const clients = await clientsService.getClientsWithPolicies(req);
  const client = clients.filter((client) => client.id === id);

  if (client.length === 0) {
    return notFound(res);
  }

  return ok(res, client);
};

const getClientPoliciesByClientId = async (req, res) => {
  const { id } = req.params;

  return ok(res);
};

module.exports = {
  getClients,
  getClientById,
  getClientPoliciesByClientId,
};
