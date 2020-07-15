const { ok } = require('../httpResponses');
const policiesService = require('./service');


const getPolicies = async (req, res) => {
  const policies = await policiesService.getPolicies(req);
  
  return ok(res, policies);
};

const getPolicyById = async (req, res) => {
  const { id } = req.params;

  return ok(res);
};

module.exports = {
  getPolicies,
  getPolicyById,
};
