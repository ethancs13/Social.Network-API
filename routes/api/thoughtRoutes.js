const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  updateThought,
  createThoughtReaction,
  deleteThoughtReaction,
} = require('../../controllers/thoughtController.js');

// /thoughts
router.route('/').get(getThoughts).post(createThought);

// /thoughts/:id
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /thoughts/:thoughtId/reactions
router
  .route('/:thoughtId/reactions')
  .post(createThoughtReaction);

router
  .route('/:thoughtId/reactions/:reactionId')
  .delete(deleteThoughtReaction);

module.exports = router;