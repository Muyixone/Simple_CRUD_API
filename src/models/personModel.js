const mongoose = require('mongoose');

const { Schema } = mongoose;

const personSchema = Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
});

module.exports = mongoose.model('Person', personSchema);
