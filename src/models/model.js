const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
  
  phone: {
    type: Number,
    required: true,
  },
  city:{
    type:String,
    required:true
  },
  zipcode:{
    type:Number,
    required:true
  }
});

module.exports = mongoose.model("DummyUser", userSchema);