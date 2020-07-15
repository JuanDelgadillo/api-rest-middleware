const { ok, badRequest, notFound } = require('../httpResponses');
const policiesService = require('./service');


const getPolicies = async (req, res) => {
  let policies = await policiesService.getPolicies(req);
  policies = policies.map((policy) => {
    delete policy.clientId;
    return policy;
  });
  
  return ok(res, policies);
};

const getPolicyById = async (req, res) => {
  const { id = '' } = req.params;

  if (!id) {
    return badRequest(res, { 
      message: 'request should have mandatory parameter "id"'
    });
  }

  const policy = await policiesService.getPolicyById(req, id);

  if (policy.length === 0) {
    return notFound(res);
  }

  return ok(res, policy);
};

module.exports = {
  getPolicies,
  getPolicyById,
};
