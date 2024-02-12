const connection = require('../config/connection');
const { Thought, User } = require('../models');
const { randomUsers, randomReactions, randomThoughts } = require('./data');

connection.on('error', (err) => err);