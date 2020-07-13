const { httpErrorCodes } = require('./consts');

module.exports.ok = function(res, payload) {
  return res.status(httpErrorCodes.ok).json({ ...payload });
};

module.exports.badRequest = function(res, payload) {
  return res.status(httpErrorCodes.badRequest).json({ message: 'Bad request', ...payload });
};

module.exports.unauthorized = function(res, payload) {
  return res.status(httpErrorCodes.unauthorized).json({ message: 'Unauthorized', ...payload });
};

module.exports.serviceUnavailable = function(res, payload) {
  return res.status(httpErrorCodes.serviceUnavailable).json({ message: 'Service Unavailable', ...payload });
};
