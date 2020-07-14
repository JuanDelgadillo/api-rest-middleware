const { ok } = require('../httpResponses');
const clientService = require('./service');


const getClients = async (req, res) => {
  const clients = await clientService.getClients(req);

  return ok(res, clients);
};

const getClientById = async (req, res) => {
  const { id } = req.params;

  return ok(res);
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
