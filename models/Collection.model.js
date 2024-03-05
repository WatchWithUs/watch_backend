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
      tasks: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Film'
      }]
    });

module.exports = model("Collection", collectionSchema);
