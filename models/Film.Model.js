const mongoose = require('mongoose');

const filmSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  videoLink: {
    type: String,
    required: true
  }
});

const Film = mongoose.model('Film', filmSchema);
module.exports = Film;