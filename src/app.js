const express = require('express');
const personRoute = require('./routes/personRoute');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/hng/api/v1', personRoute);

app.use('*', (req, res) => {
  res.send('Page not found');
});

module.exports = app;
