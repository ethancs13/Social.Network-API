const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require('../../controllers/userController.js');

// /users
router.route('/').get(getUsers).post(createUser);

// /users/:userId
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// /users/:userId/friends
router.route('/:userId/friends').post(addFriend);

// /users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').delete(deleteFriend);


module.exports = router;