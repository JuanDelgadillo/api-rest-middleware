const express = require('express');
const router = express.Router();

const { catchErrors } = require('../errorHandlers');
const {
  getPolicies,
  getPolicyById,
} = require('./controller');

// Routes
router.get('/', catchErrors(getPolicies));
router.get('/:id', catchErrors(getPolicyById));

module.exports = router;
