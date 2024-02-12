const { Thought } = require("../models/Thought");

module.exports = {
  // all
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // find one
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId });
      // if no thought
      if (!thought) {
        return res
          .status(404)
          .json({ message: "That id does not exist, please try again." });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Creates a thought
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      res.json(thought);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // Deletes a thought by ID
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndDelete({
        _id: req.params.thoughtId,
      });

      if (!thought) {
        return res
          .status(404)
          .json({ message: "That id does not exist, please try again." });
      }

      res.json(thought);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // update thuoght
  async updateThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!thought) {
        return res
          .status(404)
          .json({ message: "That id does not exist, please try again." });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async createThoughtReaction(req, res) {
    try {
      const reaction = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },
        { runValidators: true, new: true }
      );
      if (!reaction) {
        return res
          .status(404)
          .json({ message: "That id does not exist, please try again." });
      }

      res.json(reaction);
    } catch (err) {
      return res.status(500).json(err);
    }
  },

  async deleteThoughtReaction(req, res) {
    try {
      const reaction = await Thought.findOneAndDelete(
        { _id: req.params.thoughtId },
        { $pull: { reactionsId: req.params.reactionId } },
        { runValidators: true, new: true }
      );

      if (!reaction) {
        return res
          .status(404)
          .json({ message: "That id does not exist, please try again." });
      }

      res.json(reaction);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
};
