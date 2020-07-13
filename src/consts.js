const insuranceApiEndpoint = 'https://dare-nodejs-assessment.herokuapp.com/api';

const httpErrorCodes = {
  ok: 200,
  badRequest: 400,
  unauthorized: 401,
  serviceUnavailable: 503,
};

module.exports = {
  insuranceApiEndpoint,
  httpErrorCodes,
};
