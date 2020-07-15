const express = require('express');
const router = express.Router();

const { catchErrors } = require('../errorHandlers');
const { getPolicies, getPolicyById } = require('./controller');
const { authenticate } = require('../auth');

// Routes
router.get('/', authenticate, catchErrors(getPolicies));
router.get('/:id', authenticate, catchErrors(getPolicyById));

module.exports = router;
