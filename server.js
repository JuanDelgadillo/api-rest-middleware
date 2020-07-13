// Configuration
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const http = require('http');
const app = require('./src/app');
const logger = require('./src/logger');

const port = process.env.PORT || 4000;
const server = http.Server(app);


server.listen(port, () => {
  logger.info({ port }, 'server listening');
});

server.on('close', () => {
  throw new Error('server closed');
});
