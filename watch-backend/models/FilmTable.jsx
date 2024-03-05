const { Schema, model } = require('mongoose');

const filmSchema = new Schema({
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

const Film = model('Film', filmSchema);
module.exports = Film;