const { unauthorized } = require('./httpResponses');

const authenticate = (req, res, next) => {
  if (!(req.headers && req.headers.authorization)) {
    return unauthorized(res, {
      message: 'No authorization header was found',
    });
  }

  next();
};

module.exports = {
  authenticate,
};
