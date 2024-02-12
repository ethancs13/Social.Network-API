const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// middleware
router.use((req, res) => res.send('Route does not exist.'));

module.exports = router;