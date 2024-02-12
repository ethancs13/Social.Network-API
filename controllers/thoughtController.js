const { Thought } = require("../models");

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
      const thought = await Thought.findOne({ _id: req.params.id });

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
};
