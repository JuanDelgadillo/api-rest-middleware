const express = require('express');
const router = express.Router();

const { catchErrors } = require('../errorHandlers');
const {
  getClients,
  getClientById,
  getClientPoliciesByClientId,
} = require('./controller');
const { authenticate } = require('../auth');

// Routes
router.get('/', authenticate, catchErrors(getClients));
router.get('/:id', authenticate, catchErrors(getClientById));
router.get('/:id/policies', catchErrors(getClientPoliciesByClientId));

module.exports = router;
