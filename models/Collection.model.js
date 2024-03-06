const mongoose = require("mongoose");
const {Schema, model} = mongoose;

const collectionSchema = new Schema({
    title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      movies: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Movie'
      }]
    });

module.exports = model("Collection", collectionSchema);
