const insuranceApiEndpoint = 'https://dare-nodejs-assessment.herokuapp.com/api';

const httpStatuses = {
  ok: {
    code: 200,
  },
  badRequest: {
    code: 400,
    message: 'Bad request',
  },
  unauthorized: {
    code: 401,
    message: 'Unauthorized',
  },
  serviceUnavailable: {
    code: 503,
    message: 'Service Unavailable',
  },
  notFound: {
    code: 404,
    message: 'Resource not found',
  },
};

module.exports = {
  insuranceApiEndpoint,
  httpStatuses,
};
