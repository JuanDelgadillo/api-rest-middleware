const { insuranceApiEndpoint, httpStatuses } = require('../consts');
const { unauthorized, badRequest, serviceUnavailable } = httpStatuses;
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

module.exports = {
  getClients,
};
