const express = require('express');
const router = express.Router();

const { catchErrors } = require('../errorHandlers');
const {
  getClients,
  getClientById,
  getClientPoliciesByClientId,
} = require('./controller');

// Routes
router.get('/', catchErrors(getClients));
router.get('/:id', catchErrors(getClientById));
router.get('/:id/policies', catchErrors(getClientPoliciesByClientId));

module.exports = router;
