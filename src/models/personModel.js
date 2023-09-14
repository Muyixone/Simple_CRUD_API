const mongoose = require('mongoose');

const { Schema } = mongoose;

const personSchema = Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    validate: {
      validator: (value) => /^[A-Za-z0-9\s]+$/.test(value), // Only allow alphanumeric values
      message: 'Name can only contain letters, numbers, and spaces',
    },
  },
});

module.exports = mongoose.model('Person', personSchema);
