const { httpErrorCodes } = require('./consts');

module.exports.ok = function(res, payload) {
  return res.status(httpErrorCodes.ok).json((Array.isArray(payload) ? payload : ({ ...payload })));
};

module.exports.badRequest = function(res, payload) {
  return res.status(httpErrorCodes.badRequest).json({ message: 'Bad request', code: httpErrorCodes.badRequest, ...payload });
};

module.exports.unauthorized = function(res, payload) {
  return res.status(httpErrorCodes.unauthorized).json({ message: 'Unauthorized', code: httpErrorCodes.unauthorized, ...payload });
};

module.exports.serviceUnavailable = function(res, payload) {
  return res.status(httpErrorCodes.serviceUnavailable).json({ message: 'Service Unavailable', code: httpErrorCodes.serviceUnavailable, ...payload });
};
