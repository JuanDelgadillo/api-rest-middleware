const express = require('express');
const router = express.Router();

const { catchErrors } = require('../errorHandlers');
const {
  authenticate,
} = require('./controller');

// Routes
router.post('/', catchErrors(authenticate));

module.exports = router;
