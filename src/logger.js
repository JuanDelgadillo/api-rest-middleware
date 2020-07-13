const pino = require('pino');

module.exports = pino({
  enabled: !(process.env.LOG_ENABLED === 'false'),
  level: process.env.LOG_LEVEL || 'info',
  name: 'api-rest-middleware',
});
