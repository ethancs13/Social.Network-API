const router = require('express').Router();

// Imports api routes from api index file
const apiRoutes = require('./api');

// Use imported routes when URL has /api
router.use('/api', apiRoutes);

module.exports = router