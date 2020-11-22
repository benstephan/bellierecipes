const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let recipe = new Schema({
  name: {
    type: String
  },
  slug: {
    type: String
  },
  favorite: {
    type: Boolean
  },
  ingredients: [{
    quantity: {
        type: Number
    },
    name: {
        type: String
    },
    type: {
        type: String
    }
  }],
  steps: [{
      type: String
  }],
  timers: [{
      type: String
  }],
  imageURL: {
      type: String
  },
  originalURL: {
      type: String
  }
  
});

module.exports = mongoose.model("recipe", recipe);