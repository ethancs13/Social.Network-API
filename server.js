const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

// Sets port and create instance of express
const PORT = (process.env.PORT = 3001);
const app = express();

// Middleware
app.use(express.urlencoded({ entended: true }));
app.use(express.json());

// routes
// app.use(routes);

// on connection
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});