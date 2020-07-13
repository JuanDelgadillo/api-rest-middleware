const log = require('./logger.js');
const isAsyncFunction = fn => typeof fn === 'function' && fn.constructor.name === 'AsyncFunction';

exports.catchErrors = fn => {
  if (!isAsyncFunction(fn)) {
    throw new Error('`catchErrors` expects an async function');
  }
  return function(req, res, next) {
    return fn(req, res, next).catch(next);
  };
};

exports.notFound = (req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
};

exports.serverError = (err, req, res, _next) => {
  log.error(err);
  res.status(err.status || 500);

  return res.json({
    message: err.message,
    ...err.context,
  });
};
