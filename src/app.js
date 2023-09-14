const express = require('express');
const personRoute = require('./routes/personRoute');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Self pinging enpoint
app.get('/ping', (req, res) => {
  res.status(200).send('Ping successful');
});
app.use('/hng/api', personRoute);

app.use('*', (req, res) => {
  res.send('Page not found');
});

// Periodically ping the self-ping endpoint (every 15 minutes)
setInterval(() => {
  // Make an HTTP request to the /ping endpoint of your own API
  const http = require('http');
  http.get('https://crud-api-i52y.onrender.com/hng/api/ping', (res) => {
    console.log(`Ping response: ${res.statusCode}`);
  });
}, 15 * 60 * 1000); // Every 5 minutes

module.exports = app;
