const connection = require('../config/connection');
const { Thought, User } = require('../models');
const { randomUsers, randomThoughts } = require('./data');

connection.on('error', (err) => console.error(err));

connection.once('open', async () => {
  console.log('Connected to database.');
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

    const users = randomUsers(8);
    const thoughts = randomThoughts(8);

    // Insert
    await User.collection.insertMany(users);
    await Thought.collection.insertMany(thoughts);
  } catch (err) {
    console.error(err);
  }
});