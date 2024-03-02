const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

// Sets port and create instance of express
const PORT = (process.env.PORT = 3001);
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
app.use(routes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// on connection
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});