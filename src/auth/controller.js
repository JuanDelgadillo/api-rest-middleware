const { ok } = require('../httpResponses');


const authenticate = async (req, res) => {
  const { body = {} } = req;
  const { username = '', password = '' } = body;

  return ok(res);
};

module.exports = {
  authenticate,
};
