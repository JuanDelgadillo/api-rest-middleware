const { httpStatuses } = require('./consts');
const { ok, badRequest, unauthorized, serviceUnavailable, notFound } = httpStatuses;

module.exports.ok = function(res, payload) {
  return res.status(ok.code).json((Array.isArray(payload) ? payload : ({ ...payload })));
};

module.exports.badRequest = function(res, payload) {
  return res.status(badRequest.code).json({ message: badRequest.message, code: badRequest.code, ...payload });
};

module.exports.unauthorized = function(res, payload) {
  return res.status(unauthorized.code).json({ message: unauthorized.message, code: unauthorized.code, ...payload });
};

module.exports.serviceUnavailable = function(res, payload) {
  return res.status(serviceUnavailable.code).json({ message: serviceUnavailable.message, code: serviceUnavailable.code, ...payload });
};

module.exports.notFound = function(res, payload) {
  return res.status(notFound.code).json({ message: notFound.message, code: notFound.code, ...payload });
};
