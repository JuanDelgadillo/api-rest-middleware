const {
  ok,
  badRequest,
  unauthorized,
  serviceUnavailable,
} = require('../httpResponses');
const { insuranceApiEndpoint, httpStatuses } = require('../consts');
const axios = require('axios');

const authenticate = async (req, res) => {
  const { body = {} } = req;
  const { username = '', password = '' } = body;

  if (!username || !password) {
    return badRequest(res, {
      message:
        'body should have mandatory properties "username" and "password"',
    });
  }

  try {
    const response = await axios.post(`${insuranceApiEndpoint}/login`, {
      client_id: username,
      client_secret: password,
    });

    const { token = '', type = '' } = response.data;
    const expires_in = JSON.parse(
      Buffer.from(token.split('.')[1], 'base64').toString()
    ).exp;

    return ok(res, {
      token,
      type,
      expires_in,
    });
  } catch (error) {
    const { data } = error.response;

    if (data.statusCode === httpStatuses.unauthorized.code) {
      return unauthorized(res, {
        message: 'invalid username or password',
      });
    }

    return serviceUnavailable(res);
  }
};

module.exports = {
  authenticate,
};
