const express = require('express');
const persons = require('./routes/personRoute');
require('dotenv').config();

const app = express();

app.use('/hng/api/v1', persons);

module.exports = app;
