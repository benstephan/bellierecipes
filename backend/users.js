const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let user = new Schema({
  username:{
    type: String
  },
  password: {
    type: String
  },
  email: {
    type: String 
  }, 
  login: {
      type: String
  }
});

module.exports = mongoose.model("user", user);