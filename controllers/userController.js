const User = require('../models/User');

module.exports = {
  // Finds all users.
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Finds a single user.
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId });

      if (!user) {
        return res
          .status(404)
          .json({ message: 'That id does not exist, please try again.' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Creates a new user.
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      return res.status(500).json(err);
    }
  },

  // Updates user based off ID.
  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!user) {
        return res
          .status(404)
          .json({ message: 'That id does not exist, please try again.' });
      }

      res.json(user);
    } catch (err) {
      return res.status(500).json(err);
    }
  },

  // Deletes user based off ID.
  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.userId });

      if (!user) {
        return res
          .status(404)
          .json({ message: 'That id does not exist, please try again.' });
      }

      res.json(user);
    } catch (err) {
      return res.status(500).json(err);
    }
  },

  // Adds a new friend to a user's friend list.
  async addFriend(req, res) {
    try {
      const friend = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.body } },
        { runValidators: true, new: true }
      );

      if (!friend) {
        return res
          .status(404)
          .json({ message: 'That id does not exist, please try again.' });
      }

      res.json(friend);
    } catch (err) {
      return res.status(500).json(err);
    }
  },

  // Deletes friend from a specific user
  async deleteFriend(req, res) {
    try {
      const friend = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendId } },
        { runValidators: true, new: true }
      );

      if (!friend) {
        return res
          .status(404)
          .json({ message: 'That id does not exist, please try again.' });
      }

      res.json(friend);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
};