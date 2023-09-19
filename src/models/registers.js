// import mongoose module in mongoose variable.
const mongoose = require("mongoose");

// schema in key-value pair.
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  number: {
    type: Number,
    require: true
  },
  email: {
    type: String,
    require: true,
    unique: true
  },
  gender: {
    type: String,
    require: true
  },
  age: {
    type: Number,
    require: true
  },
  password: {
    type: String,
    require: true
  }
});

// Create collection(table)
const Register = new mongoose.model("firsttable",userSchema);

module.exports = Register;