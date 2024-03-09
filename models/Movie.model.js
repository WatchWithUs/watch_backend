const mongoose = require("mongoose");
const { Schema, model } = mongoose;
 
const movieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    year: {
        type: Number
    }
}, {
    timestamps: true
});

module.exports = model("Movie", movieSchema);