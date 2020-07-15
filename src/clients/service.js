const { insuranceApiEndpoint, httpStatuses } = require('../consts');
const { unauthorized, badRequest, serviceUnavailable, notFound } = httpStatuses;
const policiesService = require('../policies/service');
const axios = require('axios');

const getClients = async (req) => {
  try {
    const response = await axios.get(`${insuranceApiEndpoint}/clients`, {
      headers: {
        authorization: req.headers['authorization'],
      },
    });
    const { data = [] } = response;

    return data;
  } catch (error) {
    const { data } = error.response;

    if ([unauthorized.code, badRequest.code].indexOf(data.statusCode) !== -1) {
      let err = new Error(data.message);
      err.status = data.statusCode;
      throw err;
    }

    let err = new Error(serviceUnavailable.message);
    err.status = serviceUnavailable.code;
    throw err;
  }
};

const getClientsWithPolicies = async (req) => {
  let clients = await getClients(req);
  const policies = await policiesService.getPolicies(req);

  clients = clients.map((client) => {
    client.policies = policies.filter((policy) => policy.clientId === client.id).map((policy) => {
      delete policy.email;
      delete policy.installmentPayment;
      delete policy.clientId;
      return policy;
    });

    return client;
  });

  return clients;
};

const getClientPoliciesByClientId = async (req, clientId) => {
  let clients = await getClients(req);
  clients = clients.filter(client => client.id === clientId);

  if (clients.length === 0) {
    let err = new Error(notFound.message);
    err.status = notFound.code;
    throw err;
  }

  const policies = await policiesService.getPolicies(req);
  const clientPolicies = policies.filter((policy) => policy.clientId === clientId).map((policy) => {
    delete policy.clientId;
    return policy;
  });
  
  return clientPolicies;
};

module.exports = {
  getClients,
  getClientsWithPolicies,
  getClientPoliciesByClientId,
};
