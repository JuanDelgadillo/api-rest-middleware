const { ok, notFound, badRequest } = require('../httpResponses');
const clientsService = require('./service');

const getClients = async (req, res) => {
  const { limit = 10, name = '' } = req.query;

  if (Number.isNaN(parseInt(limit))) {
    return badRequest(res, {
      message: '"limit" query parameter should be a number',
    });
  }

  let clients = await clientsService.getClientsWithPolicies(req);
  clients = clients.slice(0, limit);

  if (name !== '') {
    let nameFilter = typeof name === 'string' ? name.toLowerCase() : name;
    clients = clients.filter(
      (client) => client.name.toLowerCase().search(nameFilter) !== -1
    );
  }

  return ok(res, clients);
};

const getClientById = async (req, res) => {
  const { id = '' } = req.params;

  if (!id) {
    return badRequest(res, {
      message: 'request should have mandatory parameter "id"',
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
  const { id = '' } = req.params;

  if (!id) {
    return badRequest(res, {
      message: 'request should have mandatory parameter "id"',
    });
  }

  const clientPolicies = await clientsService.getClientPoliciesByClientId(
    req,
    id
  );

  return ok(res, clientPolicies);
};

module.exports = {
  getClients,
  getClientById,
  getClientPoliciesByClientId,
};
