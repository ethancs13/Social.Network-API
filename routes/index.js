const router = require('express').Router();

// Imports api routes from api index file
const apiRoutes = require('./api');

// Use imported routes when URL has /api
router.use('/api', apiRoutes);

// Middleware to catch any requests not handled by above routes
// router.use((req, res) => res.send('Route does not exist.'));

module.exports = router;