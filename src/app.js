const express = require('express');
const bodyParser = require('body-parser');
const errorHandlers = require('./errorHandlers');
const app = express();

app.use(bodyParser.json({ limit: '5mb' }));

// Routes
app.use('/auth', require('./auth/routes'));

// Middlewares
app.use(errorHandlers.notFound);
app.use(errorHandlers.serverError);

module.exports = app;
