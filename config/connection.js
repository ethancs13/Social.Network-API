const { connect, connection } = require('mongoose');

connect('mongodb://127.0.0.1:27017/socialMediaDB')

  .then(() => {
    console.log(`Database is connected`);
  })
  .catch((error) => {
    console.error(`Connection has failed. Reason: ${error}`);
  });

module.exports = connection;