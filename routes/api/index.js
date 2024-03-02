const router = require('express').Router();
const thoughtRoutes = require('./thoughtRoutes');
const userRoutes = require('./userRoutes');

// Use imported routes when URL has /thoughts and /users
router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);

module.exports = router;