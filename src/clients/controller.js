const { insuranceApiEndpoint, httpErrorCodes } = require('../consts');
const { ok, unauthorized, badRequest, serviceUnavailable } = require('../httpResponses');
const axios = require('axios');


const getClients = async (req, res) => {
  try {
    const response = await axios.get(`${insuranceApiEndpoint}/clients`, {
      headers: {
        authorization: req.headers['authorization'],
      },
    });

    return ok(res, response.data);
  } catch (error) {
    const { data } = error.response;

    if (data.statusCode === httpErrorCodes.unauthorized) {
      return unauthorized(res, { 
        message: data.message,
      });
    }

    if (data.statusCode === httpErrorCodes.badRequest) {
      return badRequest(res, {
        message: data.message,
      });
    }

    return serviceUnavailable(res);
  }
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
