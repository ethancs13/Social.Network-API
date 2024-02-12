const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { randomUsers, randomThoughts } = require('./data');

connection.on('error', (err) => console.error(err));

connection.once('open', async () => {
  try {
    let userCheck = await connection.db
      .listCollections({ name: 'users' })
      .toArray();
    if (userCheck.length) {
      await connection.dropCollection('users');
    }

    let thoughtCheck = await connection.db
      .listCollections({ name: 'thoughts' })
      .toArray();
    if (thoughtCheck.length) {
      await connection.dropCollection('thoughts');
    }

    // create random users/thoughts
    const users = randomUsers(5);
    const thoughts = randomThoughts(5);

    await User.collection.insertMany(users);
    await Thought.collection.insertMany(thoughts);

    console.table("Users", users);
    console.table("Thoughts", thoughts);

    // Exits the process.
    process.exit(0);
  } catch (err) {
    console.error(err);
  }
});