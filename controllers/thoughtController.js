const Thought = require('../models/Thought');

module.exports = {
  // Finds all thoughts and returns them as json.
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Finds one thought based off the ID.
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId });

      // Need this as a check if no document was found with that ID, or null will be returned.
      if (!thought) {
        return res
          .status(404)
          .json({ message: 'That id does not exist, please try again.' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Creates a thought.
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      res.json(thought);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // Deletes a thought by ID.
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndDelete({
        _id: req.params.thoughtId,
      });

      if (!thought) {
        return res
          .status(404)
          .json({ message: 'That id does not exist, please try again.' });
      }

      res.json(thought);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // Updates a thought by ID.
  async updateThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        // Filter object
        { _id: req.params.thoughtId },
        // Update object uses $set to update fields that match in 'req.body'.
        { $set: req.body },
        // 'runValidators: true' will have Mongoose run validators for updates since it doesn't by default.
        // 'new: true' means method will return new version of document since it also doesn't by default.
        { runValidators: true, new: true }
      );

      if (!thought) {
        return res
          .status(404)
          .json({ message: 'That id does not exist, please try again.' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Creates reaction stored in single thought's reactions array field.
  async createThoughtReaction(req, res) {
    try {
      const reaction = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        // '$addToSet' is another update operator that doesn't allow for duplicate values to an array.
        // 'reactions:' is used since it is the array field from the 'Thought' document that we are changing.
        { $addToSet: { reactions: req.body } },
        { runValidators: true, new: true }
      );
      if (!reaction) {
        return res
          .status(404)
          .json({ message: 'That id does not exist, please try again.' });
      }

      res.json(reaction);
    } catch (err) {
      return res.status(500).json(err);
    }
  },

  // Deletes reaction based off the reactionId value.
  async deleteThoughtReaction(req, res) {
    try {
      const reaction = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        // '$pull' operator is used to remove something from the 'reactions' array where 'reactionId' matches 'req.params.reactionId'.
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { runValidators: true, new: true }
      );

      if (!reaction) {
        return res
          .status(404)
          .json({ message: 'That id does not exist, please try again.' });
      }

      res.json(reaction);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
};