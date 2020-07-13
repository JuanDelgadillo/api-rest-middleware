const { ok } = require('../httpResponses');


const getPolicies = async (req, res) => {

  return ok(res);
};

const getPolicyById = async (req, res) => {
  const { id } = req.params;

  return ok(res);
};

module.exports = {
  getPolicies,
  getPolicyById,
};
