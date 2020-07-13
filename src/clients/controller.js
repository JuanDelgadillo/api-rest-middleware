const { ok } = require('../httpResponses');


const getClients = async (req, res) => {

  return ok(res);
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
